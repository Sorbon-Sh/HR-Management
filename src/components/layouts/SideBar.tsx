import {
  Users,
  Calendar,
  ClipboardCheck,
  Settings,
  Building2,
} from "lucide-react";
import { NavLink } from "react-router";
import { useAppSelector } from "../../shared/hooks/useReduxTypedHooks";
import { ProfileCard } from "../ui/cards/ProfileCard";

const Sidebar = () => {
  const { full_name, role } = useAppSelector((state) => state.userProfile);
  const navItems = [
    // {
    //   path: "/dashboard",
    //   name: "Dashboard",
    //   icon: <LayoutDashboard size={20} />,
    // },
    { path: "/employees", name: "Employees", icon: <Users size={20} /> },
    { path: "/attendance", name: "Attendance", icon: <Calendar size={20} /> },
    { path: "/leave", name: "Leave", icon: <ClipboardCheck size={20} /> },
    { path: "/settings", name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed  inset-y-0 left-0 z-30 flex flex-col w-64 lg:relative transform  transition-transform duration-300 ease-in-out `}
      >
        {/* Logo */}
        <div className="flex  items-center justify-between px-6 pt-6 pb-4 text-white">
          <div className="flex items-center">
            <Building2 className="w-8 h-8 text-blue-600" />
            <span className="ml-3 text-xl font-semibold ">HR Pulse</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {role === "manager"
            ? navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-white hover:bg-gray-100"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`${isActive ? "text-blue-600" : ""}`}>
                        {item.icon}
                      </span>
                      <span className="ml-3">{item.name}</span>
                    </>
                  )}
                </NavLink>
              ))
            : null}
        </nav>

        {/* User profile */}
        <div className="p-4 border-t border-gray-200">
          <ProfileCard name={full_name} role={role} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
