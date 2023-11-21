import { Route, Routes, useLocation } from 'react-router-dom';
import AppointmentList from './list-appointments';
import ManageAppointments from './manage-appointments';

const Appointments = () => {
  const { pathname } = useLocation();

  return (
    <Routes>
      <Route index element={<AppointmentList />} />
      <Route path="create" element={<ManageAppointments />} />
    </Routes>
  );
};

export default Appointments;
