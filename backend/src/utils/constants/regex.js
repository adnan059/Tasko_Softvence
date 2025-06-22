const EMAIL_REGEX = new RegExp(process.env.EMAIL_PATTERN);
const PASSWORD_REGEX = new RegExp(process.env.PASSWORD_PATTERN);

module.exports = {
  EMAIL_REGEX,
  PASSWORD_REGEX,
};
