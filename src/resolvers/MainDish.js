module.exports = {
  orders: (_, args, ctx) => ctx.prisma.mainDish({ id: _id }).orders(),
};
