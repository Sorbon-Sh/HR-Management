import { useEffect, useState } from "react";
import supabase from "../../shared/api/supabaseClient";
import { useAppDispatch } from "../../shared/hooks/useReduxTypedHooks";
import { authUser } from "../../shared/redux/slices/authData";

export const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;

      if (user) {
        await supabase.from("profiles").select("*").eq("id", user.id).single();
      }
      dispatch(authUser(user));
      setLoading(false);
    };

    init();
  }, []);

  if (loading) return <div>Loading...</div>;

  return children;
};
