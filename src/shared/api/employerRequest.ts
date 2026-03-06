import supabase from "./supabaseClient";
import type { IEmployer } from "../types";
import { rootApi } from "../redux/slices/rootApi";

export const employerApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    addEmployer: builder.mutation({
      queryFn: async (formData) => {
        const { data, error } = await supabase
          .from("employees")
          .insert(formData);

        if (error) {
          console.log(error.message);
          throw new Error(error.message);
        }

        return { data: data || [] };
      },
      invalidatesTags: [{ type: "employees" }],
    }),
    getEmployer: builder.query<IEmployer[], string>({
      queryFn: async (teamId) => {
        const { data, error } = await supabase
          .from("profiles")
          .select(
            `
            id,
            full_name,
            email,
            employees!employees_user_id_fkey (
              position,
              department
            )
          `,
          )
          .eq("team_id", teamId)
          .eq("role", "employee");
        console.log("Request ID: ", teamId);

        if (error) {
          throw new Error(error.message);
        }

        return { data: data || [] };
      },
      providesTags: [{ type: "employees" }],
    }),
    updateEmploye: builder.mutation({
      queryFn: async ({ formData, employerData }) => {
        const { data, error } = await supabase
          .from("employees")
          .update(formData)
          .eq("id", employerData.id);
        if (error) {
          console.log(error.message);
          throw new Error(error.message);
        }
        return { data: data || [] };
      },

      invalidatesTags: [{ type: "employees" }],
    }),

    deleteEmployer: builder.mutation({
      queryFn: async (rowsId) => {
        const { data, error } = await supabase
          .from("employees")
          .delete()
          .in("id", rowsId);

        return { data: data || [] };
      },
      invalidatesTags: [{ type: "employees" }],
    }),
  }),

  //  без overrideExisting: false RTK Query молча
  // перезапишет старые эндпоинты новыми,
  //  что приведёт к неожиданный багам.
  overrideExisting: false,
});

export const {
  useAddEmployerMutation,
  useGetEmployerQuery,
  useUpdateEmployeMutation,
  useDeleteEmployerMutation,
} = employerApi;
