const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./model/user");
const app = express();
const port = 3000;

//mongoose-connection
mongoose
  .connect("mongodb+srv://ankit:root@cluster0.bwqnd79.mongodb.net/assignment")
  .then(() => console.log("MongoDB connected"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
  return res.redirect("index.html");
});

app.post("/register", async (req, res) => {
  //   const firstName = req.body.firstName;
  //   const lastName = req.body.lastName;
  //   const email = req.body.email;
  //   const password = req.body.password;
  const { firstName, lastName, email, password } = req.body;
  await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  return res.redirect("/login/login.html");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user)
    return res.render("login", {
      error: "Invalid Username & Password",
    });
  return res.redirect("/mentor.html");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
