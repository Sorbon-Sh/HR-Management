// convex/employees/getEmployees.ts

import { queryGeneric } from "convex/server";

export const getEmployees = queryGeneric({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("employees").collect();
  },
});
