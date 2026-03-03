import { Navigate } from "react-router";
import { useAppSelector } from "../../shared/hooks/useReduxTypedHooks";

export const HomeRedirect = () => {
  const role = useAppSelector((state) => state.userProfile.role);

  if (role === "manager") {
    return <Navigate to="/dashboard" replace />;
  }

  if (role === "employee") {
    return <Navigate to="/employer" replace />;
  }

  return null;
};
