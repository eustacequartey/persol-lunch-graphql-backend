module.exports = {
  orders: (_, args, ctx) => ctx.prisma.protein({ id: _id }).orders(),
};
