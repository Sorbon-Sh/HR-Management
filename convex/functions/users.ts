import { mutationGeneric, queryGeneric } from "convex/server";

// 🟢 Создать пользователя при первом входе
export const createUserIfNotExists = mutationGeneric(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Not authenticated");

  const existingUser = await ctx.db
    .query("users")
    .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
    .unique();

  if (existingUser) return existingUser;

  return await ctx.db.insert("users", {
    name: identity.name!,
    email: identity.email!,
    tokenIdentifier: identity.tokenIdentifier,
    createdAt: Date.now(),
  });
});

// 🔍 Получить текущего пользователя
export const getCurrentUser = queryGeneric(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return null;

  return await ctx.db
    .query("users")
    .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
    .unique();
});
