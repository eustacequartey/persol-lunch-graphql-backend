module.exports = {
  order: (_, args, ctx) => ctx.prisma.meal({ id: _.id }).order(),
  // main: (_, args, ctx) => ctx.prisma.meal({ id: _.id }).main(),
  // side: (_, args, ctx) => ctx.prisma.meal({ id: _.id }).side(),
  // protein: (_, args, ctx) => ctx.prisma.meal({ id: _.id }).protein(),
};
