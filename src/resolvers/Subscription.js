const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Authorization, APP_SECRET } = require("../utils");
const moment = require("moment");

module.exports = {
  deliveredMeal: {
    subscribe: async (_, args, ctx, info) => {
      let { user } = await Authorization(ctx);
      if (!user) throw new Error("You must be authenticated");

      return ctx.pubsub.asyncIterator(`Order Delivered ${user.id}`);
    },
  },
};
