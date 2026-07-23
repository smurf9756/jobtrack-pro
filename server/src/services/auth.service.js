const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");

const registerUser = async ({ fullName, email, password }) => {
  // Check if the email already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
    },
  });

  return user;
};

module.exports = {
  registerUser,
};
