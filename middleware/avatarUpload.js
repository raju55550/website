const uploader = require("../utils/imageMulter");

function attachmentUpload(req, res, next) {
  const upload = uploader(["image/jpeg", "image/jpg", "image/png"], 1000000);
  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = attachmentUpload;
