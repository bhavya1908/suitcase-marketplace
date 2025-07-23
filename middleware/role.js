// middlewares/role.js

export const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      const { role } = req.user;
      if (!allowedRoles.includes(role)) {
        return res.status(403).json({ message: "Access denied" });
      }
      next();
    } catch (err) {
      return res.status(500).json({ message: "Role check failed" });
    }
  };
};
