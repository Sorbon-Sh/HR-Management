// export const AppInitializer = ({ children }: { children: React.ReactNode }) => {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useAppDispatch();

import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/hooks/useReduxTypedHooks";
import supabase from "../../shared/api/supabaseClient";
import {
  clearAuthData,
  setAuthData,
} from "../../shared/redux/slices/userProfile";

export const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userProfile);

  const loadUser = async (session: any) => {
    if (!session) {
      dispatch(clearAuthData());
      setLoading(false);
      return;
    }

    const user = session.user;

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, team_id, role")
      .eq("id", user.id)
      .single();

    dispatch(
      setAuthData({
        id: user.id,
        email: user.email ?? null,
        full_name: profile?.full_name ?? null,
        team_id: profile?.team_id ?? null,
        role: profile?.role ?? null,
        isLoading: false,
      }),
    );

    setLoading(false);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      loadUser(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        loadUser(session);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  console.log("App Init");
  console.log("UserData: ", userData);
  return children;
};
