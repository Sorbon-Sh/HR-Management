
import { mutationGeneric } from "convex/server";
import { v } from "convex/values";

export const deleteEmployee = mutationGeneric({
  args: { id: v.id("employees") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
