module.exports = {
    order: (_, args, ctx) => ctx.prisma.meal({id: _.id}).order()
}