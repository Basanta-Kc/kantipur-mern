const bcrypt = require("bcryptjs");
const User = require("../models/User");

const signUpPage = (req, res) => {
  res.render("sign-up");
};

const signInPage = (req, res) => {
  res.render("sign-in", { message: null });
};

const signUp = async (req, res) => {
  const { password, ...rest } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await User.create({ password: hashedPassword, ...rest });
  res.redirect("/sign-in");
};

const signIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.render("sign-in", { message: "Invalid Credentials" });
    return;
  }

  const userHashedPassword = user.password;
  const passwordIsCorrect = bcrypt.compareSync(
    req.body.password,
    userHashedPassword
  );

  if (passwordIsCorrect) {
    req.session.user = user;
    res.redirect("/");
  } else {
    res.render("sign-in", { message: "Invalid Credentials" });
  }
};

const logOut = async (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.redirect("/auth/sign-in");
  });
};

module.exports = {
  signIn,
  signUp,
  signInPage,
  signUpPage,
  logOut,
};
