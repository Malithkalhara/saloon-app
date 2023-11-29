import LabeledInput from 'components/LabeledInput';
import LabeledSelect from 'components/LabeledSelect';
import LabeledTextArea from 'components/LabeledTextArea';
import ModifiedButton from 'components/ModifiedButton';
import OutlinedButton from 'components/OutlinedButton';
import useCreateService from 'hooks/services/useCreateServices';
import { Controller, useForm } from 'react-hook-form';

const ManageServices = () => {
  const { control, handleSubmit } = useForm();
  const { mutateAsync: serviceCreater } = useCreateService();

  const onSubmit = (data) => {
    serviceCreater(data);
    // Handle form submission logic here
  };

  const handleCancel = () => {
    console.log(data);
    // Handle form submission logic here
  };

  const serviceTypes = [
    {
      value: 'hair',
      label: 'Hair',
    },
    { value: 'makeup', label: 'MakeUp' },
    { value: 'dressing', label: 'Dressing' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="p-4">
      <div className="text-3xl font-bold pb-4">Create Service</div>
      <div className="container mx-auto pt-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 pb-8">
            <div>
              <LabeledInput
                label="Name"
                name="name"
                control={control}
                Controller={Controller}
              />
            </div>
            <div>
              <LabeledSelect
                name="type"
                Controller={Controller}
                label="Type"
                control={control}
                options={serviceTypes}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-12">
            <div>
              <LabeledTextArea
                name="details"
                Controller={Controller}
                label="Details"
                control={control}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-12">
            <div>
              <LabeledInput
                name="price"
                Controller={Controller}
                label="Price"
                control={control}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div>
              <ModifiedButton label="Save" type="submit" />
            </div>
            <div>
              <OutlinedButton onClick={handleCancel} label="Cancel" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageServices;
