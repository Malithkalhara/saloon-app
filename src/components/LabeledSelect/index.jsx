import { Select } from 'antd';

const { Option } = Select;

const LabeledSelect = ({ name, Controller, label, control, options }) => {
  return (
    <div className="flex items-center gap-4">
      <div>{label}</div>
      <div className="w-full">
        <Controller
          name={name} // You can customize the name attribute as needed
          control={control}
          defaultValue={options[0].value}
          render={({ field }) => (
            <Select size="large" {...field} style={{ width: '100%' }}>
              {options.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          )}
        />
      </div>
    </div>
  );
};

export default LabeledSelect;
