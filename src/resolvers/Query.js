const { Authorization } = require("../utils");

module.exports = {
  hello: () => "Hello World",
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
};
