const errorMiddleware = (err, req, res, next) => {
  const status = err?.status || 500;
  const message = err?.message || "Something went wrong.";
  const stack = err?.stack;

  return res.status(status).json({
    status,
    message,
    stack: process.env.NODE_ENV === "development" ? stack : undefined,
    success: false,
  });
};

module.exports = errorMiddleware;
