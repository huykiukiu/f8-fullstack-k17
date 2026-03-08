const express = require("express");
const homeController = require("../controllers/home.controller");
const router = express.Router();
router.get("/", homeController.index);
router.get("/dang-nhap", homeController.login);
router.post("/dang-nhap", homeController.authentication);
router.get("/dang-xuat", homeController.logout);
module.exports = router;
