const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const APP_SECRET = "APP_SECRET";
const ADMIN_APP_SECRET = "ADMIN_APP_SECRET";


const Authorization = async (context) => {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {

    let admin = false

    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, APP_SECRET);
    

    const user = await context.prisma.user({
      id: userId
    })
    

    if (!user) {
      throw new Error("Unauthorized Entry");
    }
    if (user.role === "ADMIN") admin = true

    const Payload = {
      admin,
      user
    }
    return Payload
  }

  throw new Error("Not Authenticated");
};


async function SeedDbWithUsers(server, ctx) {
  const adminEmail = "esther@persol.net";
  let roleId = null;

  // const role = db.roles.find((el) => el.name === "admin");
  const role = await ctx.prisma.role({ name: "admin" });
  if (!role) {
    const newRole = await ctx.prisma.createRole({
      name: "admin",
    });
    roleId = newRole.id;
  } else {
    roleId = role.id;
  }

  const normalUserRole = await ctx.prisma.role({
    name: "normal_user",
  });

  if (!normalUserRole) {
    const newRole = await ctx.prisma.createRole({
      name: "normal_user",
    });
  }

  // const user = db.users.find((el) => el.email === adminEmail);
  const user = await ctx.prisma.user({ email: adminEmail });

  if (!user) {
    const user = await ctx.prisma.createUser({
      email: adminEmail,
      role: {
        connect: {
          id: roleId,
        },
      },
      activated: true,
      hasChangedPassword: false,
      password: "admin1234",
      name: "Madam Esther",
    });
  }

  server.start(() => console.log("localhost:4000"));
}

module.exports = {
  SeedDbWithUsers,
  Authorization,
  ADMIN_APP_SECRET,
  APP_SECRET,
};
