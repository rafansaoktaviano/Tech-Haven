const jwt = require("jsonwebtoken");
require("dotenv/config")
const KEY = process.env.JWT_SECRET_KEY;

const generateToken = (payload) => {
  try {
    const tokens = jwt.sign(payload, "SECRET_KEY", { expiresIn: "12h" });
    console.log(tokens);
    return tokens;
  } catch (error) {
    return error;
  }
};

const verifyToken = (tokens) => {
  const isVerified = jwt.verify(tokens, "SECRET_KEY");
  return isVerified;
};

module.exports = { generateToken, verifyToken };
