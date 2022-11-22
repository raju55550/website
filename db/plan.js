const mongoose = require('mongoose');

const planSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
    },
    planDescription: {
      type: String,
    },
    languages: [],
    videosAllowed: Number,
    monthlyPrice: Number,
    annualPrice: Number,
    status: String,
    storageAllowed: String,
    desc: { type: Array, default: [] },
    time: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Plan', planSchema);
