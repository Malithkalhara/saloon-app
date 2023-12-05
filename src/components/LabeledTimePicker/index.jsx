import { TimePicker } from 'antd';

const LabeledTimePicker = ({ name, Controller, label, control }) => {
  return (
    <div className="flex items-center gap-4 m-2">
      <div className="w-1/6">{label}</div>
      <div className="w-5/6">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => <TimePicker size='large' format="HH:mm" {...field}/>}
        />
      </div>
    </div>
  );
};

export default LabeledTimePicker;
