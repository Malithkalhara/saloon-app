import { Input } from 'antd';

const LabledTextArea = ({ name, Controller, label, control }) => {
  const { TextArea } = Input;
  return (
    <div className="flex item-center gap-4">
      <div className="">{label}</div>
      <div className="w-full">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => <TextArea {...field} rows={6} />}
        />
      </div>
    </div>
  );
};

export default LabledTextArea;
