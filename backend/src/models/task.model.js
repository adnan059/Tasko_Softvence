// task title
// task desc
// end date

// task status : ongoing, pending, done

// select options: all task, ongoing, pending, collaborative task, done

// task category: arts and craft, nature, family, sports, friends, meditation

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Task creator is required"],
    },
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
    },

    description: {
      type: String,
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },

    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },

    category: {
      type: String,
      required: [true, "Task Category is required"],
      enum: [
        "artsAndCraft",
        "nature",
        "family",
        "sports",
        "friends",
        "meditation",
      ],
    },

    status: {
      type: String,
      enum: ["pending", "ongoing", "done"],
      default: "pending",
    },

    taskType: {
      type: String,
      enum: ["solo", "collaborative"],
      default: "solo",
    },

    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
