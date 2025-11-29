import supabase from "./supabaseClient";
import type { IEmployerForm } from "../types";
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
    getEmployer: builder.query<IEmployerForm[], void>({
      queryFn: async () => {
        const { data: data, error } = await supabase
          .from("employees")
          .select("*");
        if (error) {
          console.log(error.message);
          throw new Error(error.message);
        }

        return { data: data || [] };
      },
      providesTags: [{ type: "employees" }],
    }),
    // updateEmployer: builder.mutation({
    //   queryFn: async (form) => {
    //     const [
    //       formData,
    //       planData,
    //       dateIsString,
    //       annualAmount,
    //       monthlyAmount,
    //       maxAmount,
    //       rowsId,
    //     ] = form;
    //     const date = prepareDateWithOriginalParts(planData, dateIsString);
    //     const { data, error: planError } = await supabase
    //       .from("finplans")
    //       .update({
    //         ...formData,
    //         annualAmount,
    //         monthlyAmount,
    //         maxAmount,
    //         date,
    //       })
    //       .eq("id", rowsId);

    //     const { data: updatePlanTran, error: planTranError } = await supabase
    //       .from("finplanTransactions")
    //       .update({
    //         fromPlan: formData.plan,
    //       })
    //       .eq("planId", rowsId);

    //     Promise.all([data, updatePlanTran]).catch(() => {
    //       if (planError || planTranError) {
    //         console.log(planError?.message || planTranError?.message);
    //         throw new Error(planError?.message || planTranError?.message);
    //       }
    //     });

    //     return { data: data || [] };
    //   },

    //   invalidatesTags: [{ type: "employer" }],
    // }),
    // deleteEmployer: builder.mutation({
    //   queryFn: async (rowsId) => {
    //     const deletePlan = await supabase
    //       .from("finplans")
    //       .delete()
    //       .in("id", rowsId);

    //     const deletePlanTransactions = await supabase
    //       .from("finplanTransactions")
    //       .delete()
    //       .in("planId", rowsId);

    //     const data = Promise.all([deletePlan, deletePlanTransactions])
    //       .then((results) => {
    //         const isError = results.find((result) => result.error);
    //         if (isError) {
    //           throw new Error(`${isError.error?.message}`);
    //         }
    //       })
    //       .catch((error) => {
    //         throw new Error(`${error.message}`);
    //       });
    //     return { data: data || [] };
    //   },
    //   invalidatesTags: [{ type: "employer" }],
    // }),
  }),

  //  без overrideExisting: false RTK Query молча
  // перезапишет старые эндпоинты новыми,
  //  что приведёт к неожиданный багам.
  overrideExisting: false,
});

export const {
  useAddEmployerMutation,
  useGetEmployerQuery,
  //   useUpdateEmployerMutation,
  //   useDeleteEmployerMutation,
} = employerApi;
