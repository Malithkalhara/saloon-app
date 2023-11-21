import { Route, Routes, useLocation } from 'react-router-dom';
import ServicesList from './list-sevices';
import ManageServices from './manage-services';

const Services = () => {
  const { pathname } = useLocation();

  return (
    <Routes>
      <Route index element={<ServicesList />} />
      <Route path="create" element={<ManageServices />} />
    </Routes>
  );
};

export default Services;
