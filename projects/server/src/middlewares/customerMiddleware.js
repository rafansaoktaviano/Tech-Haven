const res = require("express/lib/response");
const db = require("../models");

const { verifyToken } = require("../lib/jwt");

module.exports = {
  customerMiddleware: async (req, res, next) => {
    try {
      const tokens = req.token;

      if (!tokens) {
        return res
          .status(401)
          .json({ message: "Access denied. No token provided." });
      }

      const decoded = verifyToken(tokens);

      const userId = decoded.id;

      const user = await db.users.findByPk(userId);

      if (!user) {
        return res.status(401).json({ message: "User not found." });
      }

      const userRole = user.role;

      if (userRole === "Customer" ) {
        next();
      } else {
        return res.status(401).json({ message: "Access denied." });
      }
    } catch (error) {
      return res.status(401).json({ message: "Invalid token." });
    }
  },
  adminMiddleware: async(req,res,next) => {
    try {
      const tokens = req.token;

      if (!tokens) {
        return res
          .status(401)
          .json({ message: "Access denied. No token provided." });
      }

      const decoded = verifyToken(tokens);

      const userId = decoded.id;

      const user = await db.users.findByPk(userId);

      if (!user) {
        return res.status(401).json({ message: "User not found." });
      }

      const userRole = user.role;

      if (userRole === "Warehouse Admin" || userRole === "Owner") {
        next();
      } else {
        return res.status(401).json({ message: "Access denied." });
      }
    } catch (error) {
      return res.status(401).json({ message: "Invalid token." });
    }
  }
};
