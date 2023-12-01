import { DatePicker } from 'antd';

const LabeledDatePicker = ({ name, Controller, label, control }) => {
  return (
    <div className="flex items-center gap-4 m-2">
      <div className="w-1/6">{label}</div>
      <div className="w-5/6">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => <DatePicker size='large' format="YYYY-MM-DD" {...field} />}
        />
      </div>
    </div>
  );
};

export default LabeledDatePicker;
