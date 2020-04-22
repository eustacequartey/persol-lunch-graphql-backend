const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Authorization, APP_SECRET } = require("../utils");

const createAdmin = (parent, args, context) => {
  let { admin } = Authorization(context);
  if (!admin) throw new Error("Authorized persons only");

  const adminRole = context.db.roles.find((el) => {
    return el.name === "admin";
  });

  const admin_user = {
    ...args.data,
    id: v4(),
    role: adminRole.id,
    password: "admin1234",
    hasChangedPassword: false,
    activated: true,
  };

  context.db.users = [...context.db.users, admin_user];
  return admin_user;
};

const createUser = (_, args, context) => {
  let { admin } = Authorization(context);
  if (!admin) throw new Error("Authorized persons only");

  const normalUserRole = context.db.roles.find((el) => {
    return el.name === "normal_user";
  });

  const new_user = {
    ...args.data,
    id: v4(),
    role: normalUserRole.id,
    password: "admin1234",
    hasChangedPassword: false,
    activated: false,
  };

  context.db.users = [...context.db.users, new_user];
  return new_user;
};

const login = async (parent, args, context) => {
  const user = context.db.users.find((el) => el.email === args.email);
  if (!user || !user.activated) throw new Error("No such user found");

  let valid = false;

  if (!user.hasChangedPassword) {
    valid = args.password === user.password;
  } else {
    valid = await bcrypt.compare(args.password, user.password);
  }

  if (!valid) throw new Error("Invalid Password");

  let token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
};

const toggleUserActivation = (_, args, context) => {
  let { admin } = Authorization(context);
  if (!admin) throw new Error("Authorized persons only");

  const user = context.db.users.find((el) => el.id === args.id);
  if (!user) throw new Error("No such user found");
  user.activated = !user.activated;
  return user;
};

const changeFirstPassword = async (_, args, context) => {
  let { admin, user } = Authorization(context);

  user.password = await bcrypt.hash(args.newPassword, 8);
  user.hasChangedPassword = true;

  return true;
};

module.exports = {
  createUser,
  createAdmin,
  login,
  toggleUserActivation,
  changeFirstPassword,
};
