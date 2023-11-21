import ProtectedRoute from 'components/ProtectedRoute';
import SidebarLayout from 'components/SideBarLayout';
import Appointmemts from 'pages/Appointments';
import Billing from 'pages/Billing';
import Customers from 'pages/Customers';
import Home from 'pages/Dashboard';
import Login from 'pages/Login';
import Offers from 'pages/Offers';
import Services from 'pages/Services';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route exact path="/app" element={<ProtectedRoute />}>
          <Route path="/app" element={<Home />} />
        </Route>
        <Route exact element={<ProtectedRoute />}>
          <Route exact path="/appointments/*" element={<Appointmemts />} />
        </Route>
        <Route exact path="/billing" element={<ProtectedRoute />}>
          <Route exact path="/billing" element={<Billing />} />
        </Route>
        <Route exact path="/customers" element={<ProtectedRoute />}>
          <Route exact path="/customers" element={<Customers />} />
        </Route>
        <Route exact element={<ProtectedRoute />}>
          <Route exact path="/services/*" element={<Services />} />
        </Route>
        <Route exact path="/offers" element={<ProtectedRoute />}>
          <Route exact path="/offers" element={<Offers />} />
        </Route>
      </Route>
      {/* Render Login without Sidebar */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
