const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Authorization, APP_SECRET } = require("../utils");

const createAdmin = async (parent, args, context) => {
  let {admin} = await Authorization(context);
  if (!admin) throw new Error("Authorized persons only");


  const user = await context.prisma.createUser({
    ...args.data,
    role: "ADMIN",
    password: "admin12",
    hasChangedPassword: false,
    activated: true,
  })
  return user;
};

const createUser = async (_, args, context) => {
  let { admin } = await Authorization(context);
  if (!admin) throw new Error("Authorized persons only");


  const new_user = await context.prisma.createUser({
      ...args.data,
      role: "NORMAL_USER",
      password: "admin12",
      hasChangedPassword: false,
      activated: false,
    })
  return new_user;
};

const login = async (parent, args, context) => {

  const user = await context.prisma.user({
      email: args.email 
  })

  let valid = false;

  if (!user.activated) throw new Error("You are not an activated user")

  if (!user.hasChangedPassword) {
    valid = args.password === user.password;
    console.log("has changed password is false")
  } else {
    valid = await bcrypt.compare(args.password, user.password);
    console.log("has changed password is true")
  }

  if (!valid) throw new Error("Invalid Password");

  let token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
};

const toggleUserActivation = async (_, args, context) => {
  let { admin } = await Authorization(context);
  if (!admin) throw new Error("Authorized persons only");

  const user = await context.prisma.user({
    id: args.id
  })

  if (!user) throw new Error("No such user found");
  const activated = user.activated
  
  return await context.prisma.updateUser({
    where: { id: user.id },
    data: {
      activated: !activated
    }
  })
};

const changeFirstPassword = async (_, args, context) => {
  let { user } = await Authorization(context);

  const newPassword = await bcrypt.hash(args.newPassword, 8)

   await context.prisma.updateUser({
    where: {
      id: user.id
    },
    data: {
      password: newPassword,
      hasChangedPassword: true
    }
  })

  return true;
};

module.exports = {
  createUser,
  createAdmin,
  login,
  toggleUserActivation,
  changeFirstPassword,
};
