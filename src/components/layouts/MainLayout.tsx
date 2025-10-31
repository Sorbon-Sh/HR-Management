import { useState} from 'react';
import Header from './Header';
import { Outlet} from 'react-router';
import Sidebar from './SideBar';




const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="flex h-lvh bg-[#3a4c4f] pt-4 pr-4">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden bg-[#f8f7f1] rounded-xl">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;