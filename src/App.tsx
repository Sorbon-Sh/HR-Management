import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import MainLayout from "./components/layouts/Main";
import Employees from "./components/pages/Employees";
import Leave from "./components/pages/LeaveManagement";
import Performance from "./components/pages/Performance";
import Recruitment from "./components/pages/Recruitment";
import Settings from "./components/pages/Settings";


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/employees" replace />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/employees" element={<Employees />} />
          {/* <Route path="/attendance" element={<Attendance />} /> */}
          <Route path="/leave" element={<Leave />} />
          <Route path="/performance" element={<Performance />} />
          {/* <Route path="/payroll" element={<Payroll />} /> */}
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
