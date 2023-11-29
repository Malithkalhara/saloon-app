import { Button } from '@mui/material';

const OutlinedButton = ({ onClick, label, type }) => {
  return (
    <Button type={type} variant="outlined" onClick={onClick}>
      {label}
    </Button>
  );
};

export default OutlinedButton;
