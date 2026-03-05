import { BrowserRouter, Route, Routes } from "react-router";
import Employees from "./components/pages/Employees";
import Leave from "./components/pages/LeaveManagement";
import Settings from "./components/pages/Settings";
import Dashboard from "./components/pages/Dashboard";
import Attendance from "./components/pages/Attendance";
import AuthPage from "./components/pages/AuthPage";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";
import MainLayout from "./components/layouts/MainLayout";
import { RoleRoute } from "./components/routes/RoleRoute";
import { OnboardingPage } from "./components/pages/OnboardingPage";
import { HomeRedirect } from "./components/routes/HomeRedirect";
import OnboardingGuard from "./components/routes/OnboardingGuard";
import EmployeePage from "./components/pages/EmployeePage";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* Публичный маршрут */}
    //     {/*<Route element={<PublicRoute />}>*/}
    //     <Route path="/login" element={<AuthPage />} />
    //     {/*</Route>*/}
    //     {/* Защищённые маршруты */}
    //     <Route element={<ProtectedRoute />}>
    //       <Route element={<MainLayout />}>
    //         <Route path="/onboarding" element={<OnboardingPage />} />
    //         {/*<Route element={<RoleRoute />}>*/}
    //         {/*<Route path="/" element={<Navigate to="/user" replace />} />*/}
    //         <Route path="/user" element={<EmployeeUserPage />} />
    //         {/*</Route>*/}
    //         {/*<Route element={<RoleRoute />}>*/}
    //         <Route path="/" element={<Navigate to="/dashboard" replace />} />
    //         <Route path="/dashboard" element={<Dashboard />} />
    //         <Route path="/employees" element={<Employees />} />
    //         <Route path="/attendance" element={<Attendance />} />
    //         <Route path="/leave" element={<Leave />} />
    //         {/*</Route>*/}
    //         <Route path="/settings" element={<Settings />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     {/* Public */}
    //     <Route path="/login" element={<AuthPage />} />

    //     {/* Protected */}
    //     <Route element={<ProtectedRoute />}>
    //       <Route path="/onboarding" element={<OnboardingPage />} />
    //       {/* Onboarding check */}
    //       <Route element={<OnboardingGuard />}>
    //         <Route element={<MainLayout />}>
    //           <Route path="/" element={<HomeRedirect />} />
    //           {/* Manager */}
    //           <Route element={<RoleRoute allow={["manager"]} />}>
    //             <Route path="/dashboard" element={<Dashboard />} />
    //             <Route path="/employees" element={<Employees />} />
    //             <Route path="/attendance" element={<Attendance />} />
    //             <Route path="/leave" element={<Leave />} />
    //             <Route path="/settings" element={<Settings />} />
    //           </Route>

    //           {/* Employee */}
    //           <Route element={<RoleRoute allow={["employee"]} />}>
    //             <Route path="/employer" element={<EmployeePage />} />
    //           </Route>
    //         </Route>
    //       </Route>
    //     </Route>

    //     {/*</Route>*/}
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<AuthPage />} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          {/* Онбординг всегда доступен */}
          <Route path="/onboarding" element={<OnboardingPage />} />

          {/* Только если есть команда */}
          <Route element={<OnboardingGuard />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomeRedirect />} />

              <Route element={<RoleRoute allow={["manager"]} />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/leave" element={<Leave />} />
                <Route path="/settings" element={<Settings />} />
              </Route>

              <Route element={<RoleRoute allow={["employee"]} />}>
                <Route path="/employer" element={<EmployeePage />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
