import supabase from "@/shared/api/supabaseClient";
import type { IProfiles } from "@/shared/types";
import { rootApi } from "@/shared/redux/slices/rootApi";

export const employerApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    // addEmployer: builder.mutation({
    //   queryFn: async (formData: IEmployer & IProfiles) => {
    //     const { error: profileError } = await supabase
    //       .from("profiles")
    //       .update({
    //         full_name: formData.full_name,
    //         email: formData.email,
    //       })
    //       .eq("id", id);

    //     if (profileError) {
    //       throw new Error(profileError.message);
    //     }

    //     const { data, error } = await supabase
    //       .from("employees")
    //       .insert(formData);

    //     if (error) {
    //       console.log(error.message);
    //       throw new Error(error.message);
    //     }

    //     return { data: data || [] };
    //   },
    //   invalidatesTags: [{ type: "employees" }],
    // }),
    getEmployer: builder.query<IProfiles[], string>({
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
              department,
              phone,
              user_id,
              created_at
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
        const { full_name, email, phone, position, department } = formData;
        const { employees } = employerData;
        console.log("user ID: ", employees.user_id);
        console.log("formData: ", formData);
        const { error: profileError } = await supabase
          .from("profiles")
          .update({
            full_name,
            email,
          })
          .eq("id", employees.user_id);

        if (profileError) throw new Error(profileError.message);

        const { data, error } = await supabase
          .from("employees")
          .update({
            position,
            department,
            phone,
          })
          .eq("user_id", employees.user_id)
          .select();

        if (error) throw new Error(error.message);

        return { data };
      },
      invalidatesTags: [{ type: "employees" }],
    }),

    deleteEmployer: builder.mutation({
      queryFn: async (profile) => {
        const { id } = profile;
        const { error: profileError } = await supabase
          .from("profiles")
          .update({
            team_id: "",
          })
          .eq("id", id);
        if (profileError) throw new Error(profileError.message);

        return { data: id };
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
  useGetEmployerQuery,
  useUpdateEmployeMutation,
  useDeleteEmployerMutation,
} = employerApi;
