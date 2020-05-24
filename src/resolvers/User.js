const User = {
    orders: (parent, args, ctx) => ctx.prisma.user({ id: parent.id }).orders()
}

  module.exports = User