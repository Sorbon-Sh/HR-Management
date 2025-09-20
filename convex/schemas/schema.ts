import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
    createdAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),

  employees: defineTable({
    name: v.string(),
    role: v.string(),
    ownerId: v.id("users"), // <== вот связь с пользователем!
  }),
});
