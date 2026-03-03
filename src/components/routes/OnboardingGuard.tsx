import { Outlet } from "react-router";
import { Navigate } from "react-router";
import { useAppSelector } from "../../shared/hooks/useReduxTypedHooks";

const OnboardingGuard = () => {
  const profile = useAppSelector((state) => state.userProfile);

  if (!profile.team_id) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
};

export default OnboardingGuard;
