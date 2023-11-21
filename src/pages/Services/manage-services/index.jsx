import LabeledInput from 'components/LabeledInput';
import { useForm } from 'react-hook-form';

const ManageServices = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="p-4">
      <div className="text-3xl font-bold pb-4">Create Service</div>
      <div className="container mx-auto pt-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 pb-8">
            <div>
              <LabeledInput label="Name" control={control} />
            </div>

            <div>
              <LabeledInput label="Code" control={control} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-12">
            <div>
              <LabeledInput label="Name" control={control} />
            </div>

            <div>
              <LabeledInput label="Code" control={control} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-12">
            <div>
              <LabeledInput label="Name" control={control} />
            </div>

            <div>
              <LabeledInput label="Code" control={control} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageServices;
