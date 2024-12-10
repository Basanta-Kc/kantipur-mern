const jwt = require("jsonwebtoken");
const protect = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.cookies.token, "secret");
    req.authUser = { id: decoded.id };
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = { protect };
