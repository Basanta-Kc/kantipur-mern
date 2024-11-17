const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const signUp = async (req, res) => {
  const { password, ...rest } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await User.create({ password: hashedPassword, ...rest });
  res.json({
    message: "Signed up successfully.",
  });
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
    const token = jwt.sign(
      {
        id: user._id,
        roles: user.roles,
      },
      "secret",
      { expiresIn: "10d" }
    );
    res.json({
      message: "Signedin succesfully.",
      token,
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials",
    });
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
};

// signin =>> code (123)
// Post /product (create) attach(123)
