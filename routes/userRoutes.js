const express = require("express");

const {
  getUsersCount,
  updateUser,
  checkUserInfo,
  createApiKeys,
  deleteApiKeys,
  updateUserPassword,
} = require("../controllers/userControllers");
const imageUpload = require("../utils/imageMulter");
const { authenticatedUser } = require("../middleware/auth");
// avatars upload
const avatarUpload = require("../middleware/avatarUpload");
const router = express();

router.route("/count").get(getUsersCount);
router.route("/update/:id").put(avatarUpload, updateUser);
router.route("/updatePassword/:id").put(authenticatedUser, updateUserPassword);
router.route("/check").get(authenticatedUser, checkUserInfo);
router.route("/api-keys/:id").patch(createApiKeys).delete(deleteApiKeys);

module.exports = router;
