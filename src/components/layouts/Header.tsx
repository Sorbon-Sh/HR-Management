import { Bell, HelpCircle, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import LogoutButton from "../ui/buttons/LogoutButton";
import { useAppSelector } from "../../shared/hooks/useReduxTypedHooks";

const Header = () => {
  const { role, email } = useAppSelector((state) => state.userProfile);
  const [isScrolled, setIsScrolled] = useState(false);
  // const location = useLocation();

  // Get page title based on current route
  // const getPageTitle = () => {
  //   const path = location.pathname.split("/")[1];
  //   if (!path) return "Dashboard";
  //   return path.charAt(0).toUpperCase() + path.slice(1);
  // };

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-10  transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between p-4  lg:px-8">
        {role === "employee" ? (
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              {/*{getPageTitle()}*/}
            </h1>
          </div>
        ) : null}

        <div className="flex items-center space-x-3 ml-auto">
          {role === "manager" ? (
            <div className="space-x-3">
              {/* Notification buttons */}
              <button className="p-2 text-gray-500 rounded-md hover:bg-gray-100 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-500 rounded-md hover:bg-gray-100">
                <Mail size={20} />
              </button>
              <button className="p-2 text-gray-500 rounded-md hover:bg-gray-100">
                <HelpCircle size={20} />
              </button>
            </div>
          ) : null}

          <LogoutButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
