const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Authorization, APP_SECRET } = require("../utils");

const Mutation = {
  createAdmin: async (parent, args, context) => {
    let { admin } = await Authorization(context);
    if (!admin) throw new Error("Authorized persons only");

    const user = await context.prisma.createUser({
      ...args.data,
      role: "ADMIN",
      password: "admin12",
      hasChangedPassword: false,
      activated: true,
    });
    return user;
  },

  createUser: async (_, args, context) => {
    let { admin } = await Authorization(context);
    if (!admin) throw new Error("Authorized persons only");

    const new_user = await context.prisma.createUser({
      ...args.data,
      role: "NORMAL_USER",
      password: "admin12",
      hasChangedPassword: false,
      activated: false,
    });
    return new_user;
  },

  login: async (_, args, context) => {
    const user = await context.prisma.user({
      email: args.email,
    });

    let valid = false;

    if (!user.activated) throw new Error("You are not an activated user");

    if (!user.hasChangedPassword) {
      valid = args.password === user.password;
      console.log("has changed password is false");
    } else {
      valid = await bcrypt.compare(args.password, user.password);
      console.log("has changed password is true");
    }

    if (!valid) throw new Error("Invalid Password");

    let token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
      token,
      user,
    };
  },

  toggleUserActivation: async (_, args, context) => {
    let { admin } = await Authorization(context);
    if (!admin) throw new Error("Authorized persons only");

    const user = await context.prisma.user({
      id: args.id,
    });

    if (!user) throw new Error("No such user found");
    const activated = user.activated;

    return await context.prisma.updateUser({
      where: { id: user.id },
      data: {
        activated: !activated,
      },
    });
  },

  changeFirstPassword: async (_, args, context) => {
    let { user } = await Authorization(context);
    if (!user) throw new Error("You must be authenticated");

    const newPassword = await bcrypt.hash(args.newPassword, 8);

    await context.prisma.updateUser({
      where: {
        id: user.id,
      },
      data: {
        password: newPassword,
        hasChangedPassword: true,
      },
    });

    return true;
  },

  createMainDish: async (_, args, ctx) => {
    let { admin } = await Authorization(ctx);
    if (!admin) throw new Error("Authorized persons only");

    return await ctx.prisma.createMainDish({
      name: args.name,
      type: args.type,
    });
  },

  createSideDish: async (_, args, ctx) => {
    let { admin } = await Authorization(ctx);
    if (!admin) throw new Error("Authorized persons only");

    return await ctx.prisma.createSideDish({
      name: args.name,
      type: args.type,
    });
  },

  createProtein: async (_, args, ctx) => {
    let { admin } = await Authorization(ctx);
    if (!admin) throw new Error("Authorized persons only");

    return await ctx.prisma.createProtein({
      name: args.name,
      type: args.type,
    });
  },

  createOrder: async (_, args, ctx) => {
    let { user } = await Authorization(ctx);
    if (!user) throw new Error("You must be authenticated");

    return await ctx.prisma.createOrder({
      createdFor: args.data.createdFor,
      createdBy: { connect: { id: user.id } },
      main: { connect: { id: args.data.main } },
      side: { connect: { id: args.data.side } },
      protein: { connect: { id: args.data.protein } },
      delivered: _.data.delivered || false,
    });
  },
};

module.exports = Mutation;
