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
import { useEffect, useState } from 'react';
import { Select } from 'antd';
import axios from 'axios';
import api from 'api';
import LabeledMultiSelect from 'components/LabeledMultiSelect';

const localizer = momentLocalizer(moment);

const ManageAppointments = () => {
  const { control, handleSubmit, reset } = useForm({});
  const [services, setServices] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchServices = async () => {
    await api
      .get('services')
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const extractTime = (time) => {
    const current = new Date(time);
    const timeString = current.getHours() + ':' + current.getMinutes() +":00";
    console.log(timeString);
    return timeString;
  };

  const createAppointment = async (data)=>{
    data.appointmentStartTime = extractTime(data.appointmentStartTime);
    data.appointmentEndTime = extractTime(data.appointmentEndTime);
    await api
    .post('appointments', data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  
  useEffect(() => {
    fetchServices();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
  
    try {
      await createAppointment(data);
      // Clear the form data
      reset({});
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    console.log(data);
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
                <LabeledMultiSelect
                  label="Services"
                  name="serviceIds"
                  control={control}
                  Controller={Controller}
                  options={services}
                  placeholder={'Select Services'}
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
                name="appointmentStartTime"
                control={control}
                Controller={Controller}
              />
            </div>
            <div>
              <LabeledTimePicker
                label="End Time"
                name="appointmentEndTime"
                control={control}
                Controller={Controller}
              />
            </div>
          </div>

          <div className="flex justify-end m-2">
            {/* <button type="submit">test</button> */}
            <div className="m-2">
              <ModifiedButton label="Create" type="submit" isLoading={isLoading} />
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
