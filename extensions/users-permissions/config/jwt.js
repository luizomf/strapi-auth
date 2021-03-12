module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  jwt: {
    expiresIn: "7d",
  }
};
