const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/users", async (req, res) => {
  const dataPath = path.join(__dirname, "data", "users.json");
  const file = await fs.readFile(dataPath, "utf-8");
  const usersArr = JSON.parse(file);
  if (req.query.q) {
    const keyword = req.query.q.toLowerCase();
    const dataRes = usersArr.filter(
      (user) => user.name === keyword || user.email === keyword,
    );
    return res.status(200).json(dataRes);
  }

  if (req.query.name) {
    const keyword = req.query.name.toLowerCase();
    const dataRes = usersArr.filter((user) => user.name === keyword);
    return res.status(200).json(dataRes);
  }

  if (req.query.email) {
    const keyword = req.query.email.toLowerCase();
    const dataRes = usersArr.filter((user) => user.email === keyword);
    return res.status(200).json(dataRes);
  }

  return res.status(200).json(usersArr);
});

app.get("/users/:id", async (req, res) => {
  const dataPath = path.join(__dirname, "data", "users.json");
  const file = await fs.readFile(dataPath, "utf-8");
  const usersArr = JSON.parse(file);
  const id = Number(req.params.id);
  const dataRes = usersArr.filter((user) => user.id === id);
  if (dataRes.length > 0) {
    return res.status(200).json(dataRes);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});

app.post("/users", async (req, res) => {
  const dataPath = path.join(__dirname, "data", "users.json");
  const file = await fs.readFile(dataPath, "utf-8");
  const usersArr = JSON.parse(file);
  const id = usersArr.length + 1;
  const name = req.body.name;
  const email = req.body.email;
  if (!name || !email || !req.body) {
    return res.status(400).json({ message: "vui lòng nhập thông tin" });
  }
  usersArr.push({ id: id, name: name, email: email });
  await fs.writeFile(dataPath, JSON.stringify(usersArr));
  return res.status(201).json({ message: "thêm user thành công" });
});

app.put("/users/:id", async (req, res) => {
  const dataPath = path.join(__dirname, "data", "users.json");
  const file = await fs.readFile(dataPath, "utf-8");
  const usersArr = JSON.parse(file);
  const id = Number(req.params.id);
  const name = req.body.name;
  const email = req.body.email;
  const userFound = usersArr.find((user) => user.id === id);

  if (!userFound) {
    return res.status(404).json({ message: "User not found" });
  }

  //   tìm index của user cần sửa trong mảng
  const userFoundIndex = usersArr.findIndex((user) => user.id === id);

  //cập nhật
  usersArr[userFoundIndex].name = name;
  usersArr[userFoundIndex].email = email;
  await fs.writeFile(dataPath, JSON.stringify(usersArr));
  return res.status(201).json({ message: "cập nhật user thành công" });
});

app.delete("/users/:id", async (req, res) => {
  const dataPath = path.join(__dirname, "data", "users.json");
  const file = await fs.readFile(dataPath, "utf-8");
  const usersArr = JSON.parse(file);
  const id = Number(req.params.id);
  const userFoundIndex = usersArr.findIndex((user) => user.id === id);
  if (userFoundIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  const newData = usersArr.filter((user) => user.id !== id);
  await fs.writeFile(dataPath, JSON.stringify(newData));
  return res.status(201).json({ message: "xóa user thành công" });
});

app.listen(3000, () => {
  console.log("đang chạy ở cổng 3000");
});
