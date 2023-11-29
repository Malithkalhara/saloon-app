import { Button } from '@mui/material';

const ModifiedButton = ({ onClick, label, type }) => {
  return (
    <Button type={type} variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};

export default ModifiedButton;
