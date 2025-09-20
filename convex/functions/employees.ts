import { queryGeneric } from "convex/server";

// 🔍 Получить сотрудников текущего пользователя
export const getEmployees = queryGeneric(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return [];

  const user = await ctx.db
    .query("users")
    .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
    .unique();

  if (!user) return [];

  return await ctx.db
    .query("employees")
    .filter((q) => q.eq(q.field("ownerId"), user._id))
    .collect();
});
