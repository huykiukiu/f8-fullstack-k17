const flash = require("connect-flash");
const path = require("path");
const session = require("express-session");
const indexRoutes = require("./src/routes/index");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.set("views", `${path.join(__dirname, "src", "views")}`);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use(indexRoutes);

app.listen(3000, () => {
  console.log("Kết nối thành công ở cổng 3000");
});
