const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { default: helmet } = require("helmet");
const errorMiddleware = require("./middlewares/error.middleware");

const userRoutes = require("./routes/user.routes");
const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/api/test", (req, res) => {
  res.send("working fine");
});

app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

app.get("/", (req, res) => {
  res.status(404).send("Error 404 : Not Found");
});

app.use(errorMiddleware);

module.exports = app;
