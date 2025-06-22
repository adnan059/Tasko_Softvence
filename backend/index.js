require("dotenv").config();
const connectDB = require("./src/config/db.config");
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
