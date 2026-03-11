import { rootApi } from "@/shared/redux/slices/rootApi";
import type { IProfiles } from "@/shared/types";
import supabase from "@/shared/api/supabaseClient";

export const profilesApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query<IProfiles[], void>({
      queryFn: async () => {
        const { data: data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", (await supabase.auth.getUser()).data.user?.id);

        if (error) throw error;

        return { data: data || [] };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetProfilesQuery } = profilesApi;
