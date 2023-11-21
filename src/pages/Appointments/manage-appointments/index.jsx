import moment from 'moment';
import { momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const ManageAppointments = () => {
  return (
    <div>
      <h1>Create Appointment</h1>
    </div>
  );
};

export default ManageAppointments;
