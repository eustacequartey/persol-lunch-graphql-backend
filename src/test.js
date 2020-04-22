const { prisma } = require("./generated/prisma-client/");

async function main() {
  const newRole = await prisma.createRole({
    name: "normal_user",
  });

  console.log(`created new role ${newRole.name} (ID: ${newRole.id})}`);

  const allRoles = await prisma.roles();

  console.log(allRoles);
}

main().catch((e) => console.error(e));
