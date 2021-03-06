module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateMainDish {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateProtein {
  count: Int!
}

type AggregateSideDish {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type MainDish {
  id: ID!
  name: String!
  type: MainType!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type MainDishConnection {
  pageInfo: PageInfo!
  edges: [MainDishEdge]!
  aggregate: AggregateMainDish!
}

input MainDishCreateInput {
  id: ID
  name: String!
  type: MainType!
  orders: OrderCreateManyWithoutMainInput
}

input MainDishCreateOneWithoutOrdersInput {
  create: MainDishCreateWithoutOrdersInput
  connect: MainDishWhereUniqueInput
}

input MainDishCreateWithoutOrdersInput {
  id: ID
  name: String!
  type: MainType!
}

type MainDishEdge {
  node: MainDish!
  cursor: String!
}

enum MainDishOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
}

type MainDishPreviousValues {
  id: ID!
  name: String!
  type: MainType!
}

type MainDishSubscriptionPayload {
  mutation: MutationType!
  node: MainDish
  updatedFields: [String!]
  previousValues: MainDishPreviousValues
}

input MainDishSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MainDishWhereInput
  AND: [MainDishSubscriptionWhereInput!]
  OR: [MainDishSubscriptionWhereInput!]
  NOT: [MainDishSubscriptionWhereInput!]
}

input MainDishUpdateInput {
  name: String
  type: MainType
  orders: OrderUpdateManyWithoutMainInput
}

input MainDishUpdateManyMutationInput {
  name: String
  type: MainType
}

input MainDishUpdateOneRequiredWithoutOrdersInput {
  create: MainDishCreateWithoutOrdersInput
  update: MainDishUpdateWithoutOrdersDataInput
  upsert: MainDishUpsertWithoutOrdersInput
  connect: MainDishWhereUniqueInput
}

input MainDishUpdateWithoutOrdersDataInput {
  name: String
  type: MainType
}

input MainDishUpsertWithoutOrdersInput {
  update: MainDishUpdateWithoutOrdersDataInput!
  create: MainDishCreateWithoutOrdersInput!
}

input MainDishWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: MainType
  type_not: MainType
  type_in: [MainType!]
  type_not_in: [MainType!]
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  AND: [MainDishWhereInput!]
  OR: [MainDishWhereInput!]
  NOT: [MainDishWhereInput!]
}

input MainDishWhereUniqueInput {
  id: ID
  name: String
}

enum MainType {
  STEW
  SOUP
  HOTSAUCE
}

type Mutation {
  createMainDish(data: MainDishCreateInput!): MainDish!
  updateMainDish(data: MainDishUpdateInput!, where: MainDishWhereUniqueInput!): MainDish
  updateManyMainDishes(data: MainDishUpdateManyMutationInput!, where: MainDishWhereInput): BatchPayload!
  upsertMainDish(where: MainDishWhereUniqueInput!, create: MainDishCreateInput!, update: MainDishUpdateInput!): MainDish!
  deleteMainDish(where: MainDishWhereUniqueInput!): MainDish
  deleteManyMainDishes(where: MainDishWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createProtein(data: ProteinCreateInput!): Protein!
  updateProtein(data: ProteinUpdateInput!, where: ProteinWhereUniqueInput!): Protein
  updateManyProteins(data: ProteinUpdateManyMutationInput!, where: ProteinWhereInput): BatchPayload!
  upsertProtein(where: ProteinWhereUniqueInput!, create: ProteinCreateInput!, update: ProteinUpdateInput!): Protein!
  deleteProtein(where: ProteinWhereUniqueInput!): Protein
  deleteManyProteins(where: ProteinWhereInput): BatchPayload!
  createSideDish(data: SideDishCreateInput!): SideDish!
  updateSideDish(data: SideDishUpdateInput!, where: SideDishWhereUniqueInput!): SideDish
  updateManySideDishes(data: SideDishUpdateManyMutationInput!, where: SideDishWhereInput): BatchPayload!
  upsertSideDish(where: SideDishWhereUniqueInput!, create: SideDishCreateInput!, update: SideDishUpdateInput!): SideDish!
  deleteSideDish(where: SideDishWhereUniqueInput!): SideDish
  deleteManySideDishes(where: SideDishWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  createdAt: DateTime!
  createdFor: DateTime!
  createdBy: User!
  main: MainDish!
  side: SideDish!
  protein: Protein
  delivered: Boolean!
  deliveredAt: DateTime
  comments: String
  feedback: String
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  createdFor: DateTime!
  createdBy: UserCreateOneWithoutOrdersInput!
  main: MainDishCreateOneWithoutOrdersInput!
  side: SideDishCreateOneWithoutOrdersInput!
  protein: ProteinCreateOneWithoutOrdersInput
  delivered: Boolean!
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderCreateManyWithoutCreatedByInput {
  create: [OrderCreateWithoutCreatedByInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateManyWithoutMainInput {
  create: [OrderCreateWithoutMainInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateManyWithoutProteinInput {
  create: [OrderCreateWithoutProteinInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateManyWithoutSideInput {
  create: [OrderCreateWithoutSideInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutCreatedByInput {
  id: ID
  createdFor: DateTime!
  main: MainDishCreateOneWithoutOrdersInput!
  side: SideDishCreateOneWithoutOrdersInput!
  protein: ProteinCreateOneWithoutOrdersInput
  delivered: Boolean!
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderCreateWithoutMainInput {
  id: ID
  createdFor: DateTime!
  createdBy: UserCreateOneWithoutOrdersInput!
  side: SideDishCreateOneWithoutOrdersInput!
  protein: ProteinCreateOneWithoutOrdersInput
  delivered: Boolean!
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderCreateWithoutProteinInput {
  id: ID
  createdFor: DateTime!
  createdBy: UserCreateOneWithoutOrdersInput!
  main: MainDishCreateOneWithoutOrdersInput!
  side: SideDishCreateOneWithoutOrdersInput!
  delivered: Boolean!
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderCreateWithoutSideInput {
  id: ID
  createdFor: DateTime!
  createdBy: UserCreateOneWithoutOrdersInput!
  main: MainDishCreateOneWithoutOrdersInput!
  protein: ProteinCreateOneWithoutOrdersInput
  delivered: Boolean!
  deliveredAt: DateTime
  comments: String
  feedback: String
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  createdFor_ASC
  createdFor_DESC
  delivered_ASC
  delivered_DESC
  deliveredAt_ASC
  deliveredAt_DESC
  comments_ASC
  comments_DESC
  feedback_ASC
  feedback_DESC
}

type OrderPreviousValues {
  id: ID!
  createdAt: DateTime!
  createdFor: DateTime!
  delivered: Boolean!
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdFor: DateTime
  createdFor_not: DateTime
  createdFor_in: [DateTime!]
  createdFor_not_in: [DateTime!]
  createdFor_lt: DateTime
  createdFor_lte: DateTime
  createdFor_gt: DateTime
  createdFor_gte: DateTime
  delivered: Boolean
  delivered_not: Boolean
  deliveredAt: DateTime
  deliveredAt_not: DateTime
  deliveredAt_in: [DateTime!]
  deliveredAt_not_in: [DateTime!]
  deliveredAt_lt: DateTime
  deliveredAt_lte: DateTime
  deliveredAt_gt: DateTime
  deliveredAt_gte: DateTime
  comments: String
  comments_not: String
  comments_in: [String!]
  comments_not_in: [String!]
  comments_lt: String
  comments_lte: String
  comments_gt: String
  comments_gte: String
  comments_contains: String
  comments_not_contains: String
  comments_starts_with: String
  comments_not_starts_with: String
  comments_ends_with: String
  comments_not_ends_with: String
  feedback: String
  feedback_not: String
  feedback_in: [String!]
  feedback_not_in: [String!]
  feedback_lt: String
  feedback_lte: String
  feedback_gt: String
  feedback_gte: String
  feedback_contains: String
  feedback_not_contains: String
  feedback_starts_with: String
  feedback_not_starts_with: String
  feedback_ends_with: String
  feedback_not_ends_with: String
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  createdFor: DateTime
  createdBy: UserUpdateOneRequiredWithoutOrdersInput
  main: MainDishUpdateOneRequiredWithoutOrdersInput
  side: SideDishUpdateOneRequiredWithoutOrdersInput
  protein: ProteinUpdateOneWithoutOrdersInput
  delivered: Boolean
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderUpdateManyDataInput {
  createdFor: DateTime
  delivered: Boolean
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderUpdateManyMutationInput {
  createdFor: DateTime
  delivered: Boolean
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderUpdateManyWithoutCreatedByInput {
  create: [OrderCreateWithoutCreatedByInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithoutMainInput {
  create: [OrderCreateWithoutMainInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutMainInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutMainInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithoutProteinInput {
  create: [OrderCreateWithoutProteinInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutProteinInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutProteinInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithoutSideInput {
  create: [OrderCreateWithoutSideInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutSideInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutSideInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateWithoutCreatedByDataInput {
  createdFor: DateTime
  main: MainDishUpdateOneRequiredWithoutOrdersInput
  side: SideDishUpdateOneRequiredWithoutOrdersInput
  protein: ProteinUpdateOneWithoutOrdersInput
  delivered: Boolean
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderUpdateWithoutMainDataInput {
  createdFor: DateTime
  createdBy: UserUpdateOneRequiredWithoutOrdersInput
  side: SideDishUpdateOneRequiredWithoutOrdersInput
  protein: ProteinUpdateOneWithoutOrdersInput
  delivered: Boolean
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderUpdateWithoutProteinDataInput {
  createdFor: DateTime
  createdBy: UserUpdateOneRequiredWithoutOrdersInput
  main: MainDishUpdateOneRequiredWithoutOrdersInput
  side: SideDishUpdateOneRequiredWithoutOrdersInput
  delivered: Boolean
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderUpdateWithoutSideDataInput {
  createdFor: DateTime
  createdBy: UserUpdateOneRequiredWithoutOrdersInput
  main: MainDishUpdateOneRequiredWithoutOrdersInput
  protein: ProteinUpdateOneWithoutOrdersInput
  delivered: Boolean
  deliveredAt: DateTime
  comments: String
  feedback: String
}

input OrderUpdateWithWhereUniqueWithoutCreatedByInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutCreatedByDataInput!
}

input OrderUpdateWithWhereUniqueWithoutMainInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutMainDataInput!
}

input OrderUpdateWithWhereUniqueWithoutProteinInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutProteinDataInput!
}

input OrderUpdateWithWhereUniqueWithoutSideInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutSideDataInput!
}

input OrderUpsertWithWhereUniqueWithoutCreatedByInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutCreatedByDataInput!
  create: OrderCreateWithoutCreatedByInput!
}

input OrderUpsertWithWhereUniqueWithoutMainInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutMainDataInput!
  create: OrderCreateWithoutMainInput!
}

input OrderUpsertWithWhereUniqueWithoutProteinInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutProteinDataInput!
  create: OrderCreateWithoutProteinInput!
}

input OrderUpsertWithWhereUniqueWithoutSideInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutSideDataInput!
  create: OrderCreateWithoutSideInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdFor: DateTime
  createdFor_not: DateTime
  createdFor_in: [DateTime!]
  createdFor_not_in: [DateTime!]
  createdFor_lt: DateTime
  createdFor_lte: DateTime
  createdFor_gt: DateTime
  createdFor_gte: DateTime
  createdBy: UserWhereInput
  main: MainDishWhereInput
  side: SideDishWhereInput
  protein: ProteinWhereInput
  delivered: Boolean
  delivered_not: Boolean
  deliveredAt: DateTime
  deliveredAt_not: DateTime
  deliveredAt_in: [DateTime!]
  deliveredAt_not_in: [DateTime!]
  deliveredAt_lt: DateTime
  deliveredAt_lte: DateTime
  deliveredAt_gt: DateTime
  deliveredAt_gte: DateTime
  comments: String
  comments_not: String
  comments_in: [String!]
  comments_not_in: [String!]
  comments_lt: String
  comments_lte: String
  comments_gt: String
  comments_gte: String
  comments_contains: String
  comments_not_contains: String
  comments_starts_with: String
  comments_not_starts_with: String
  comments_ends_with: String
  comments_not_ends_with: String
  feedback: String
  feedback_not: String
  feedback_in: [String!]
  feedback_not_in: [String!]
  feedback_lt: String
  feedback_lte: String
  feedback_gt: String
  feedback_gte: String
  feedback_contains: String
  feedback_not_contains: String
  feedback_starts_with: String
  feedback_not_starts_with: String
  feedback_ends_with: String
  feedback_not_ends_with: String
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Protein {
  id: ID!
  name: String!
  type: ProteinType!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type ProteinConnection {
  pageInfo: PageInfo!
  edges: [ProteinEdge]!
  aggregate: AggregateProtein!
}

input ProteinCreateInput {
  id: ID
  name: String!
  type: ProteinType!
  orders: OrderCreateManyWithoutProteinInput
}

input ProteinCreateOneWithoutOrdersInput {
  create: ProteinCreateWithoutOrdersInput
  connect: ProteinWhereUniqueInput
}

input ProteinCreateWithoutOrdersInput {
  id: ID
  name: String!
  type: ProteinType!
}

type ProteinEdge {
  node: Protein!
  cursor: String!
}

enum ProteinOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
}

type ProteinPreviousValues {
  id: ID!
  name: String!
  type: ProteinType!
}

type ProteinSubscriptionPayload {
  mutation: MutationType!
  node: Protein
  updatedFields: [String!]
  previousValues: ProteinPreviousValues
}

input ProteinSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProteinWhereInput
  AND: [ProteinSubscriptionWhereInput!]
  OR: [ProteinSubscriptionWhereInput!]
  NOT: [ProteinSubscriptionWhereInput!]
}

enum ProteinType {
  MEAT
  FISH
  MISCELLANEOUS
}

input ProteinUpdateInput {
  name: String
  type: ProteinType
  orders: OrderUpdateManyWithoutProteinInput
}

input ProteinUpdateManyMutationInput {
  name: String
  type: ProteinType
}

input ProteinUpdateOneWithoutOrdersInput {
  create: ProteinCreateWithoutOrdersInput
  update: ProteinUpdateWithoutOrdersDataInput
  upsert: ProteinUpsertWithoutOrdersInput
  delete: Boolean
  disconnect: Boolean
  connect: ProteinWhereUniqueInput
}

input ProteinUpdateWithoutOrdersDataInput {
  name: String
  type: ProteinType
}

input ProteinUpsertWithoutOrdersInput {
  update: ProteinUpdateWithoutOrdersDataInput!
  create: ProteinCreateWithoutOrdersInput!
}

input ProteinWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: ProteinType
  type_not: ProteinType
  type_in: [ProteinType!]
  type_not_in: [ProteinType!]
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  AND: [ProteinWhereInput!]
  OR: [ProteinWhereInput!]
  NOT: [ProteinWhereInput!]
}

input ProteinWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  mainDish(where: MainDishWhereUniqueInput!): MainDish
  mainDishes(where: MainDishWhereInput, orderBy: MainDishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MainDish]!
  mainDishesConnection(where: MainDishWhereInput, orderBy: MainDishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MainDishConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  protein(where: ProteinWhereUniqueInput!): Protein
  proteins(where: ProteinWhereInput, orderBy: ProteinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Protein]!
  proteinsConnection(where: ProteinWhereInput, orderBy: ProteinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProteinConnection!
  sideDish(where: SideDishWhereUniqueInput!): SideDish
  sideDishes(where: SideDishWhereInput, orderBy: SideDishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SideDish]!
  sideDishesConnection(where: SideDishWhereInput, orderBy: SideDishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SideDishConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  NORMAL_USER
}

type SideDish {
  id: ID!
  name: String!
  type: SideType!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type SideDishConnection {
  pageInfo: PageInfo!
  edges: [SideDishEdge]!
  aggregate: AggregateSideDish!
}

input SideDishCreateInput {
  id: ID
  name: String!
  type: SideType!
  orders: OrderCreateManyWithoutSideInput
}

input SideDishCreateOneWithoutOrdersInput {
  create: SideDishCreateWithoutOrdersInput
  connect: SideDishWhereUniqueInput
}

input SideDishCreateWithoutOrdersInput {
  id: ID
  name: String!
  type: SideType!
}

type SideDishEdge {
  node: SideDish!
  cursor: String!
}

enum SideDishOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
}

type SideDishPreviousValues {
  id: ID!
  name: String!
  type: SideType!
}

type SideDishSubscriptionPayload {
  mutation: MutationType!
  node: SideDish
  updatedFields: [String!]
  previousValues: SideDishPreviousValues
}

input SideDishSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SideDishWhereInput
  AND: [SideDishSubscriptionWhereInput!]
  OR: [SideDishSubscriptionWhereInput!]
  NOT: [SideDishSubscriptionWhereInput!]
}

input SideDishUpdateInput {
  name: String
  type: SideType
  orders: OrderUpdateManyWithoutSideInput
}

input SideDishUpdateManyMutationInput {
  name: String
  type: SideType
}

input SideDishUpdateOneRequiredWithoutOrdersInput {
  create: SideDishCreateWithoutOrdersInput
  update: SideDishUpdateWithoutOrdersDataInput
  upsert: SideDishUpsertWithoutOrdersInput
  connect: SideDishWhereUniqueInput
}

input SideDishUpdateWithoutOrdersDataInput {
  name: String
  type: SideType
}

input SideDishUpsertWithoutOrdersInput {
  update: SideDishUpdateWithoutOrdersDataInput!
  create: SideDishCreateWithoutOrdersInput!
}

input SideDishWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: SideType
  type_not: SideType
  type_in: [SideType!]
  type_not_in: [SideType!]
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  AND: [SideDishWhereInput!]
  OR: [SideDishWhereInput!]
  NOT: [SideDishWhereInput!]
}

input SideDishWhereUniqueInput {
  id: ID
  name: String
}

enum SideType {
  DUMPLING
  RICE
}

type Subscription {
  mainDish(where: MainDishSubscriptionWhereInput): MainDishSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  protein(where: ProteinSubscriptionWhereInput): ProteinSubscriptionPayload
  sideDish(where: SideDishSubscriptionWhereInput): SideDishSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  otherNames: String
  lastName: String!
  email: String!
  role: Role!
  password: String!
  hasChangedPassword: Boolean!
  activated: Boolean!
  phone: String!
  dob: DateTime!
  address: String!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstName: String!
  otherNames: String
  lastName: String!
  email: String!
  role: Role!
  password: String!
  hasChangedPassword: Boolean!
  activated: Boolean!
  phone: String!
  dob: DateTime!
  address: String!
  orders: OrderCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutOrdersInput {
  id: ID
  firstName: String!
  otherNames: String
  lastName: String!
  email: String!
  role: Role!
  password: String!
  hasChangedPassword: Boolean!
  activated: Boolean!
  phone: String!
  dob: DateTime!
  address: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  otherNames_ASC
  otherNames_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  role_ASC
  role_DESC
  password_ASC
  password_DESC
  hasChangedPassword_ASC
  hasChangedPassword_DESC
  activated_ASC
  activated_DESC
  phone_ASC
  phone_DESC
  dob_ASC
  dob_DESC
  address_ASC
  address_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  otherNames: String
  lastName: String!
  email: String!
  role: Role!
  password: String!
  hasChangedPassword: Boolean!
  activated: Boolean!
  phone: String!
  dob: DateTime!
  address: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstName: String
  otherNames: String
  lastName: String
  email: String
  role: Role
  password: String
  hasChangedPassword: Boolean
  activated: Boolean
  phone: String
  dob: DateTime
  address: String
  orders: OrderUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  firstName: String
  otherNames: String
  lastName: String
  email: String
  role: Role
  password: String
  hasChangedPassword: Boolean
  activated: Boolean
  phone: String
  dob: DateTime
  address: String
}

input UserUpdateOneRequiredWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutOrdersDataInput {
  firstName: String
  otherNames: String
  lastName: String
  email: String
  role: Role
  password: String
  hasChangedPassword: Boolean
  activated: Boolean
  phone: String
  dob: DateTime
  address: String
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  otherNames: String
  otherNames_not: String
  otherNames_in: [String!]
  otherNames_not_in: [String!]
  otherNames_lt: String
  otherNames_lte: String
  otherNames_gt: String
  otherNames_gte: String
  otherNames_contains: String
  otherNames_not_contains: String
  otherNames_starts_with: String
  otherNames_not_starts_with: String
  otherNames_ends_with: String
  otherNames_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  hasChangedPassword: Boolean
  hasChangedPassword_not: Boolean
  activated: Boolean
  activated_not: Boolean
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  dob: DateTime
  dob_not: DateTime
  dob_in: [DateTime!]
  dob_not_in: [DateTime!]
  dob_lt: DateTime
  dob_lte: DateTime
  dob_gt: DateTime
  dob_gte: DateTime
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  phone: String
}
`
      }
    