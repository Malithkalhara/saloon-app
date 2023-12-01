import { Input } from 'antd';

const LabeledInput = ({ name, Controller, label, control }) => {
  return (
    <div className="flex items-center gap-4 m-2">
      <div className="w-1/6">{label}</div>
      <div className="w-5/6">
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

export default LabeledInput;
