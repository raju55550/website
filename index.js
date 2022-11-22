require("express-async-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
require("./db/config");
const errorHandler = require("./middleware/errorHandler");

const app = express();

/* adding middlware*/
app.use(express.json());
app.use(cors());

// for getting avatar and video in client side
app.use(
  "/public/videos",
  express.static(path.join(__dirname, "public/videos/"))
);
app.use(
  "/public/avatars",
  express.static(path.join(__dirname, "public/avatars/"))
);

app.use("/", require("./routes/authRoutes"));
app.use("/auth", require("./routes/userRoutes"));
app.use("/media", require("./routes/mediaRoutes"));
app.use("/plans", require("./routes/planRoutes"));
app.use("/transactions", require("./routes/transactionRoutes"));
app.use("/keys", require("./routes/keysRoutes"));

app.use(errorHandler);

app.listen(5000, () => console.log("Server is up and running"));
