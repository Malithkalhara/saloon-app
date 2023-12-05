import { Select } from 'antd';
import LabeledSelect from 'components/LabeledSelect';

const LabeledMultiSelect = ({ name, Controller, label, control, options, placeholder }) => {
  return (
    <div className="flex items-center gap-4 m-2">
      <div className="w-1/6">{label}</div>
      <div className="w-5/6">
        <Controller
          name={name}
          control={control}
        //   defaultValue={null}
          render={({ field }) => (
            <Select mode='multiple' size="large" {...field} style={{ width: '100%' }} showSearch={false}>
              {options && options.map((option) => (
                <Option key={option.id} value={option.id}>
                  {option.name}
                </Option>
              ))}
            </Select>
          )}
        />
      </div>
    </div>
  );
};

export default LabeledMultiSelect;
