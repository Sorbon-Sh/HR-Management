// convex/employees/createEmployee.ts

import { mutationGeneric } from "convex/server";
import { v } from "convex/values";

export const createEmployee = mutationGeneric({
  args: {
    employeeId: v.string(),
    designation: v.string(),
    joinDate: v.string(),
    status: v.string(),
    age: v.float64(),
    employee: v.object({
      name: v.string(),
      lastName: v.string(),
      email: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("employees", args);
  },
});
