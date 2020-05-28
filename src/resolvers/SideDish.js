module.exports = {
  orders: (_, args, ctx) => ctx.prisma.sideDish({ id: _id }).orders(),
};
