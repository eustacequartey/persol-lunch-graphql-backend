module.exports = {
  createdBy: (_, args, ctx) => ctx.prisma.order({ id: _.id }).createdBy(),
  main: (_, args, ctx) => ctx.prisma.order({ id: _.id }).main(),
  side: (_, args, ctx) => ctx.prisma.order({ id: _.id }).side(),
  protein: (_, args, ctx) => ctx.prisma.order({ id: _.id }).protein(),
  delivered: (_, args, ctx) => _.delivered,
  deliveredAt: (_, args, ctx) => _.deliveredAt,
};
