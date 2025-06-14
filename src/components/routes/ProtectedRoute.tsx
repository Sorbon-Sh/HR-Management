// src/components/auth/ProtectedRoute.tsx
import { useAuth0 } from "@auth0/auth0-react";
import  { type ReactNode } from "react";
import { Navigate } from "react-router";

interface IProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }:IProps) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="p-6 text-center">Загрузка...</div>;
  }

  // if (!isAuthenticated) {
  //   // Если пользователь не вошёл — отправим на /auth/login (твой кастомный путь)
  //   return <Navigate to="/login" replace />;
  // }


  // Пользователь авторизован — отобразим защищённый контент
  return <>{children}</>;
};
