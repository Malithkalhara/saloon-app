import { Button } from 'antd';

const SubmitButton = ({ type, size, onClick, label, disabled }) => {
  // You can add your custom styles or modifications here
  const customStyles = {
    // Add your styles here
  };

  return (
    <Button
      type={type} // You can pass the button type (e.g., 'primary', 'default', 'danger', etc.)
      onClick={onClick} // Handle the click event
      disabled={disabled} // Disable the button if needed
      style={customStyles} // Apply custom styles
      htmlType="submit"
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
