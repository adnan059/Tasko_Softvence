const { body } = require("express-validator");

const taskValidationRules = [
  body("creator")
    .notEmpty()
    .withMessage("Task creator is required")
    .isMongoId()
    .withMessage("Each collaborator must be a valid user ID"),
  ,
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Description can be up to 1000 characters"),

  body("endDate")
    .notEmpty()
    .withMessage("End date is required")
    .isISO8601()
    .withMessage("End date must be a valid date"),

  body("status")
    .optional()
    .isIn(["pending", "ongoing", "done"])
    .withMessage("Invalid task status"),

  body("taskType")
    .optional()
    .isIn(["solo", "collaborative"])
    .withMessage("Invalid task type"),

  body("category")
    .notEmpty()
    .withMessage("Task category is required")
    .isIn([
      "artsAndCraft",
      "nature",
      "family",
      "sports",
      "friends",
      "meditation",
    ])
    .withMessage("Invalid task category"),

  body("collaborators.*")
    .optional()
    .isMongoId()
    .withMessage("Each collaborator must be a valid user ID"),
];

module.exports = taskValidationRules;
