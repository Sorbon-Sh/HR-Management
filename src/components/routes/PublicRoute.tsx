import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import supabase from "../../shared/api/supabaseClient";
import Loading from "../layouts/Loading";

export const PublicRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      // Ощибка
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setIsLoading(false);
    };

    checkSession();
  }, []);

  if (isLoading) return <Loading />;

  // Если уже авторизован — отправляем на главную страницу
  if (session) return <Navigate to="/" replace />;

  return <Outlet />;
};
