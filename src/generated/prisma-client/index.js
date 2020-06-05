"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "MainDish",
    embedded: false
  },
  {
    name: "SideDish",
    embedded: false
  },
  {
    name: "Protein",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/eseku-d1febe/persolunch/dev`
});
exports.prisma = new exports.Prisma();
