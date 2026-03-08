const userService = require("../services/user.service");

module.exports = {
  index: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/dang-nhap");
    }
    res.render("home/home");
  },
  login: (req, res) => {
    if (req.session.user) {
      return res.redirect("/");
    }
    res.render("home/login");
  },
  authentication: (req, res) => {
    const { email, password } = req.body;
    const users = userService.getUsers();
    const foundUser = users.find(
      (user) => user.email === email && user.password === +password,
    );

    if (!email || !password) {
      req.flash("error", "Vui lòng nhập đầy đủ thông tin");
      req.flash("error", "Vui lòng nhập email");
      req.flash("error", "Vui lòng nhập mật khẩu");
      return res.redirect("/dang-nhap");
    }

    if (!foundUser) {
      req.flash("error", "Sai email hoặc mật khẩu");
      return res.redirect("/dang-nhap");
    }
    req.session.user = foundUser;
    res.redirect("/");
  },
  logout: (req, res) => {
    req.flash("success", "Đăng xuất thành công");
    delete req.session.user;
    res.redirect("/dang-nhap");
  },
};
