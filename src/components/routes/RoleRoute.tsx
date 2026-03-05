import { Navigate } from "react-router";
import { useAppSelector } from "../../shared/hooks/useReduxTypedHooks";
import { Outlet } from "react-router";

export const RoleRoute = ({ allow }: { allow: string[] }) => {
  const { role } = useAppSelector((state) => state.userProfile);

  if (!allow.includes(role!)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
