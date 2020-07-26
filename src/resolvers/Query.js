const { Authorization } = require("../utils");
const moment = require("moment");

module.exports = {
  hello: () => {
    return "Hello World";
  },
  users: (_, args, ctx) => ctx.prisma.users(),
  profile: async (_, args, ctx) => {
    const { user } = await Authorization(ctx);
    if (!user) throw new Error("You are not authorized");
    return user;
  },
  maindishes: (_, args, ctx) => ctx.prisma.mainDishes(),
  sidedishes: (_, args, ctx) => ctx.prisma.sideDishes(),
  proteins: (_, args, ctx) => ctx.prisma.proteins(),
  orders: (_, args, ctx) => ctx.prisma.orders(),
  orderBatch: async (_, args, ctx) => {
    const now =
      args.date && moment(args.date).isValid() ? moment(args.date) : moment();

    const where = {
      createdFor_gte: now.startOf("day").format(),
      createdFor_lte: now.endOf("day").format(),
    };

    return await ctx.prisma.orders({
      where,
    });
  },
};
