import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Employees from "./components/pages/Employees";
import Leave from "./components/pages/LeaveManagement";
import Performance from "./components/pages/Performance";

import Settings from "./components/pages/Settings";
import Dashboard from "./components/pages/Dashboard";
import Attendance from "./components/pages/Attendance";
import AuthPage from "./components/pages/AuthPage";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичный маршрут */}
        <Route path="/login" element={<AuthPage />} />

        {/* Защищённые маршруты */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
