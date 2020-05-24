module.exports = {
    createdBy: (_, args, ctx) => ctx.prisma.order({id: _.id}).createdBy(),
    meal: (_, args, ctx) => ctx.prisma.order({id: _.id}).meal()
  }