import { Navigate } from "react-router";
import { useAppSelector } from "../../shared/hooks/useReduxTypedHooks";
import { Outlet } from "react-router";

const OnboardingGuard = () => {
  const { team_id } = useAppSelector((state) => state.userProfile);

  if (!team_id) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
};

export default OnboardingGuard;
