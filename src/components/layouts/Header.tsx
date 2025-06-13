import { Bell, HelpCircle, Mail, Menu, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import LogoutButton from '../ui/buttons/LogoutButton';


interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname.split('/')[1];
    if (!path) return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };
  
  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`sticky top-0 z-10 bg-white transition-shadow duration-200 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 mr-4 text-gray-500 rounded-md lg:hidden hover:text-gray-900 hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 w-64 text-sm bg-gray-100 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-gray-300 transition-colors duration-200"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <Search size={18} />
            </div>
          </div>
          
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

          <LogoutButton />
          
          {/* Mobile search button */}
          <button className="p-2 text-gray-500 rounded-md hover:bg-gray-100 md:hidden">
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;