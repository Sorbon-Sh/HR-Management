
import { queryGeneric } from "convex/server";

export const getEmployees = queryGeneric(async ({ db }) => {
  return await db.query("employees").collect();
});