import { Input } from 'antd';

const LabledTextArea = ({ name, Controller, label, control }) => {
  const { TextArea } = Input;
  return (
    <div className="flex item-center gap-4 m-2">
      <div className="w-1/6">{label}</div>
      <div className="w-5/6">
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
