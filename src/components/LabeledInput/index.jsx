import { Input } from 'antd';

const LabledInput = ({ name, Controller, label, control }) => {
  return (
    <div className="flex items-center gap-4">
      <div>{label}</div>
      <div className="w-full">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => <Input size="large" {...field} />}
        />
      </div>
    </div>
  );
};

export default LabledInput;
