import { Button } from '@mui/material';

const ModifiedButton = ({ onClick, label, type , isLoading}) => {
  return (
    <Button type={type} variant="contained" onClick={onClick} disabled={isLoading}>
      {label}
    </Button>
  );
};

export default ModifiedButton;
