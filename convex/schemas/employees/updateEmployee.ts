
import { mutationGeneric } from "convex/server";
import { v } from "convex/values";

export const updateEmployee = mutationGeneric({
  args: {
    id: v.id("employees"),
    updates: v.object({
      status: v.string(),
      designation: v.string(),
      // и т.д. по нужным полям
    }),
  },
  handler: async (ctx, { id, updates }) => {
    await ctx.db.patch(id, updates);
  },
});
