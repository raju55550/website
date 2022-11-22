const multer = require("multer");
const fs = require("fs");
const path = require("path");
const CustomApiErrorHandler = require("./CustomApiErrorHandler");

function imageUpload(allowed_file_types, max_file_size) {
  // File upload folder
  const UPLOADS_FOLDER = `${__dirname}/../public/avatars`;

  // define the storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const filename =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();
      cb(null, filename + fileExt);
    },
  });
  //   prepare the final multer upload object
  const upload = multer({
    storage: storage,
    limits: {
      fieldSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(CustomApiErrorHandler("file mimetype error"));
      }
    },
  });
  return upload;
}

module.exports = imageUpload;
