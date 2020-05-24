const {Authorization} = require("../utils")

module.exports = {
    hello: () => "Hello World",
    users: (_, args, ctx) => ctx.prisma.users(),
    profile: async (_, args, ctx) => {
      const {user} = await Authorization(ctx)
      if (!user) throw new Error("You are not authorized")
      return user
    }
}


