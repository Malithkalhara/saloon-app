import { Input } from 'antd';
import { Controller } from 'react-hook-form';

const LabledInput = ({ label, control }) => {
  return (
    <div className="flex gap-4">
      <div className="">{label}</div>
      <div className="w-full">
        <Controller
          name="input1"
          control={control}
          defaultValue=""
          render={({ field }) => <Input size="large" {...field} />}
        />
      </div>
    </div>
  );
};

export default LabledInput;
