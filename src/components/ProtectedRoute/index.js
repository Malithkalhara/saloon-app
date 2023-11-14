// src/components/ProtectedRoute.js
import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = useAuth();

  console.log("Authenticate",isAuthenticated);
  if (isAuthenticated === null) {
    // Handle loading state, for example, you can render a loading spinner
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
