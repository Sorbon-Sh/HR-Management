import { Navigate, Outlet } from "react-router";

import Loading from "../layouts/Loading";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../../shared/hooks/useReduxTypedHooks";

// * Сначало запускается компонет и читает весь код
export const ProtectedRoute = () => {
  const { id } = useAppSelector((state) => state.userProfile);

  console.log("ProtectedRoute Id:", id);

  if (!id) return <Loading />;

  if (!id) return <Navigate to="/login" replace />;

  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
  // }
};
