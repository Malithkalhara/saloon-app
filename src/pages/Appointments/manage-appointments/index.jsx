import moment from 'moment';
import { momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import LabeledInput from 'components/LabeledInput';
import { Controller, useForm } from 'react-hook-form';
import ModifiedButton from 'components/ModifiedButton';
import OutlinedButton from 'components/OutlinedButton';
import LabeledTextArea from 'components/LabeledTextArea';
import LabeledDatePicker from 'components/LabeledDatePicker';
import LabeledTimePicker from 'components/LabeledTimePicker';
import LabeledSelect from 'components/LabeledSelect';

const localizer = momentLocalizer(moment);

const ManageAppointments = () => {

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  const handleCancel = () => {
    console.log(data);
    // Handle form submission logic here
  };

  const durations = [
    {
      value: '0.5',
      label: '30 Minutes',
    },
    {
      value: '1',
      label: '1 Hour',
    },
    {
      value: '1.5',
      label: '1.5 Hours',
    },
    {
      value: '2',
      label: '2 Hours',
    },
    {
      value: '2.5',
      label: '2.5 Hours',
    },
    {
      value: '3',
      label: '3 Hours',
    },
    {
      value: '4',
      label: '4 Hours',
    },
    {
      value: '5',
      label: '5 Hours',
    },
  ];

  return (
    <div className="p-4">
      <div className="text-3xl font-bold pb-4">Make an Appointment</div>
      <div className="container mx-auto pt-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabeledInput 
            label="Name"
            name="name"
            control={control}
            Controller={Controller}
          />
          <LabeledTextArea
            name="details"
            Controller={Controller}
            label="Details"
            control={control}
          />
          <LabeledInput 
            label="Customer ID"
            name="customerId"
            control={control}
            Controller={Controller}
          />
          <LabeledInput 
            label="Services"
            name="itemIds"
            control={control}
            Controller={Controller}
          />
          <LabeledDatePicker 
            label="Appointment Date"
            name="appointmentDate"
            control={control}
            Controller={Controller}
          />
          <LabeledTimePicker 
            label="Appointment Time"
            name="appointmentTime"
            control={control}
            Controller={Controller}
          />
          <LabeledSelect
            label="Time Duration"
            name="timeDuration"
            control={control}
            Controller={Controller}
            options={durations}
          />
          <div className="flex justify-end m-2">
            {/* <button type="submit">test</button> */}
            <div className='m-2'>
              <ModifiedButton label="Save" type="submit" />
            </div>
            <div className='ml-2 mb-2 mt-2'>
              <OutlinedButton onClick={handleCancel} label="Cancel" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageAppointments;
