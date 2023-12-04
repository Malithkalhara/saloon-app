import LabeledDatePicker from 'components/LabeledDatePicker';
import LabeledInput from 'components/LabeledInput';
import LabeledTextArea from 'components/LabeledTextArea';
import LabeledTimePicker from 'components/LabeledTimePicker';
import ModifiedButton from 'components/ModifiedButton';
import OutlinedButton from 'components/OutlinedButton';
import moment from 'moment';
import { momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Controller, useForm } from 'react-hook-form';

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
          <div className="grid grid-cols-2 gap-4 pb-8">
            <div>
              <LabeledInput
                label="Title"
                name="title"
                control={control}
                Controller={Controller}
              />
            </div>
            <div>
              <LabeledInput
                label="Customer Name"
                name="customerName"
                control={control}
                Controller={Controller}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-8">
            <div>
              <LabeledInput
                label="Customer Mobile No"
                name="customerMobile"
                control={control}
                Controller={Controller}
              />
            </div>
            <div>
              <LabeledInput
                label="Customer Email"
                name="customerEmail"
                control={control}
                Controller={Controller}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-8">
            <div>
              <LabeledTextArea
                name="details"
                Controller={Controller}
                label="Details"
                control={control}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-8">
            <div>
              <LabeledInput
                label="Services"
                name="itemIds"
                control={control}
                Controller={Controller}
              />
            </div>
            <div>
              <LabeledDatePicker
                label="Date"
                name="appointmentDate"
                control={control}
                Controller={Controller}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-8">
            <div>
              <LabeledTimePicker
                label="Start Time"
                name="appointmentTime"
                control={control}
                Controller={Controller}
              />
            </div>
            <div>
              <LabeledTimePicker
                label="End Time"
                name="appointmentTime"
                control={control}
                Controller={Controller}
              />
            </div>
          </div>

          <div className="flex justify-end m-2">
            {/* <button type="submit">test</button> */}
            <div className="m-2">
              <ModifiedButton label="Save" type="submit" />
            </div>
            <div className="ml-2 mb-2 mt-2">
              <OutlinedButton onClick={handleCancel} label="Cancel" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageAppointments;
