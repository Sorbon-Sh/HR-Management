import supabase from "../api/supabaseClient";

export const useGetUserId = async () => {
  const id = await supabase.auth.getUser().data?.user?.id;

  return id;
};
