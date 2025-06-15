
import {
  LayoutDashboard,
  Users,
  Calendar,
  ClipboardCheck,
  TrendingUp,
  DollarSign,
  UserPlus,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const navItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { path: "/employees", name: "Employees", icon: <Users size={20} /> },
    { path: "/attendance", name: "Attendance", icon: <Calendar size={20} /> },
    { path: "/leave", name: "Leave", icon: <ClipboardCheck size={20} /> },
    {
      path: "/performance",
      name: "Performance",
      icon: <TrendingUp size={20} />,
    },
    { path: "/payroll", name: "Payroll", icon: <DollarSign size={20} /> },
    { path: "/recruitment", name: "Recruitment", icon: <UserPlus size={20} /> },
    { path: "/settings", name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        <motion.aside
          key={isOpen ? "opened" : "closed"}
          initial={{ x: isOpen ? -280 : 0 }}
          animate={{ x: 0 }}
          exit={{ x: -280 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className={`fixed inset-y-0 left-0 z-30 flex flex-col w-64 h-screen  bg-[#384f50] border-r border-gray-200 shadow-lg lg:relative transform ${
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } transition-transform duration-300 ease-in-out `}
        >
          {/* Logo */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 text-white">
            <div className="flex items-center">
              <Building2 className="w-8 h-8 text-blue-600" />
              <span className="ml-3 text-xl font-semibold ">
                HR Pulse
              </span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-md hover:bg-gray-100 lg:hidden"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
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
                    <span
                      className={`${isActive ? "text-blue-600" : ""}`}
                    >
                      {item.icon}
                    </span>
                    <span className="ml-3">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 w-1 h-8 bg-blue-600 rounded-r-md"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* User profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                JS
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium ">John Smith</p>
                <p className="text-xs font-medium ">HR Manager</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </AnimatePresence>

      {/* Toggle button for larger screens */}
      <div className="hidden lg:block fixed bottom-4 left-64 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md hover:bg-gray-50"
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
