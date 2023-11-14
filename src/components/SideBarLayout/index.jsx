import Sidebar from 'components/SideNav';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => (
  <div className="flex gap-4">
    {/* Sidebar */}
    <div className="w-64">
      <Sidebar />
    </div>

    {/* Main Content */}
    <div className="flex-1">
      <Outlet />
    </div>
  </div>
);

export default SidebarLayout;
