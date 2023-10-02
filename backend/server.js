const express = require("express");
const logger = require("pino")();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const RegistereventModel = require("./models/RegistereventModel");
const expressSession = require("express-session");

// Import routes to here
const userRoutes = require("./routes/userManageRoutes");
const storeRoutes = require("./routes/storeRoutes");
const wholesaleRoutes = require("./routes/wholesaleRoutes");
const CompanyRequest = require("./routes/Pr_companyRoutes");

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3002",
    credentials: true,
  })
);

app.use(express.json());
app.set("trust proxy", 1);
const sessSettings = expressSession({
  path: "/",
  secret: "oursecret",
  resave: true,
  saveUninitialized: true,
  cookie: {
    sameSite: false,
    secure: false,
    maxAge: 360000,
  },
});

app.use(sessSettings);
const PORT = 8000;

const DB_URL =
  "mongodb+srv://00prabashwara123:RAvipraBa0104@cluster0.ieklcbk.mongodb.net/";
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  logger.info(" Mongodb connected successfully");
});

app.get("/", (req, res) => {
  res.status(200).json({ messsage: "Server is running!" });
});

// Implement the routes from here
app.use("/api/users", userRoutes); //must commented
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/store", storeRoutes);

app.use("/api/RegisterEvent", require("./routes/RegistereventRoutes"));

app.use("/api/wholesale", wholesaleRoutes);
app.use("/api/companyRequest", CompanyRequest);

app.listen(PORT, () => {
  logger.info(`Server is running on PORT: ${PORT}`);
});
