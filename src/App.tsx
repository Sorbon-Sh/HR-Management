import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Employees from "./components/pages/Employees";
import Leave from "./components/pages/LeaveManagement";
import Performance from "./components/pages/Performance";
import Recruitment from "./components/pages/Recruitment";
import Settings from "./components/pages/Settings";
import Dashboard from "./components/pages/Dashboard";
import Attendance from "./components/pages/Attendance";
import Payroll from "./components/pages/Payroll";
import AuthPage from "./components/pages/AuthPage";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";
import MainLayout from "./components/layouts/MainLayout";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        {/* Публичный маршрут */}
        <Route path="/login" element={<AuthPage />} />

        {/* Защищённый layout + дочерние маршруты */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
