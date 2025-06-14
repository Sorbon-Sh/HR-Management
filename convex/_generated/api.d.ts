/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as functions_employees from "../functions/employees.js";
import type * as functions_users from "../functions/users.js";
import type * as schemas_employees_createEmployee from "../schemas/employees/createEmployee.js";
import type * as schemas_employees_deleteEmployee from "../schemas/employees/deleteEmployee.js";
import type * as schemas_employees_getEmployees from "../schemas/employees/getEmployees.js";
import type * as schemas_employees_updateEmployee from "../schemas/employees/updateEmployee.js";
import type * as schemas_usersSchema from "../schemas/usersSchema.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "functions/employees": typeof functions_employees;
  "functions/users": typeof functions_users;
  "schemas/employees/createEmployee": typeof schemas_employees_createEmployee;
  "schemas/employees/deleteEmployee": typeof schemas_employees_deleteEmployee;
  "schemas/employees/getEmployees": typeof schemas_employees_getEmployees;
  "schemas/employees/updateEmployee": typeof schemas_employees_updateEmployee;
  "schemas/usersSchema": typeof schemas_usersSchema;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
