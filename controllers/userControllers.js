const User = require('../db/User');
const Plan = require('../db/plan');
const Media = require('../db/media');
const Key = require('../db/key');

exports.getUsersCount = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalVideos = await Media.countDocuments();
  res.status(200).json({
    success: true,
    totalUsers,
    totalVideos,
  });
};

// update user info
exports.updateUser = async (req, res) => {
  // req.user.data.userId
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'User not found' });
    }
    if (user) {
      if (req.files && req.files.length > 0) {
        // with avatar
        user.image = req.files[0].filename;
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
      } else {
        // without avatar
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
      }
      const updatedUser = await user.save();
      res.status(200).json({ updatedUser });
    }
  } catch (err) {
    console.log(err);
  }
  // const userUpdated = await User.findOneAndUpdate({ _id: id }, req.body, {
  //   new: true,
  //   runValidators: true,
  // });
};
// for password
exports.updateUserPassword = async (req, res) => {
  const { password, newPassword } = req.body;
  const user = await User.findByIdAndUpdate({ _id: req.params.id });

  const isPasswordMatch = await user.comparePassword(password);
  if (!user) {
    return res.status(400).json({ success: false, message: 'User not found' });
  }

  if (!isPasswordMatch) {
    res.status(400).json({ success: false });
  }
  if (isPasswordMatch) {
    user.password = newPassword;
    await user.save();
    res.status(200).json({ success: true });
  }
};

exports.checkUserInfo = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.data.userId });

    const plan = await Plan.findOne({ _id: user.planId });
    res.status(200).json({
      user,
      plan,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
};

exports.createApiKeys = async (req, res) => {
  try {
    const { app_name } = req.body;

    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'User not found' });
    }

    const time = new Date().getTime();
    const newTime = new Date();
    if (user.app_name.length > 0) {
      user.app_name = [...user.app_name, app_name];
      user.API_KEYS = [...user.API_KEYS, `APP-${app_name}-${time}`];
    } else {
      user.app_name = app_name;
      user.API_KEYS = `APP-${app_name}-${time}`;
    }

    await user.save();

    await Key.create({
      API_KEY: `APP-${app_name}-${time}`,
      userId: user._id,
      app_name,
    });

    res.status(200).json({
      user,
      newTime,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
};
exports.deleteApiKeys = async (req, res) => {
  try {
    const { name } = req.body;

    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'User not found' });
    }

    const app = user.app_name.indexOf(name);

    user.app_name = user.app_name.filter((app_name, index) => index !== app);

    const api_key = user.API_KEYS.find((api_key) => api_key.includes(name));

    const index_api_key = user.API_KEYS.indexOf(api_key);

    user.API_KEYS = user.API_KEYS.filter(
      (key, index) => index !== index_api_key
    );
    await Key.findOneAndDelete({ API_KEYS: api_key });

    await user.save();

    res.status(200).json({
      msg: 'Deletd Successfully',
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
};
