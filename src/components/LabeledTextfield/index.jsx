import { Input } from 'antd';
import { Controller } from 'react-hook-form';

const LabledTextArea = ({ label, control }) => {
  const { TextArea } = Input;
  return (
    <div className="flex gap-4">
      <div className="">{label}</div>
      <div className="w-full">
        <Controller
          name="input1"
          control={control}
          defaultValue=""
          render={({ field }) => <TextArea {...field} />}
        />
      </div>
    </div>
  );
};

export default LabledTextArea;
