import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';

const IconButton = ({ onClick, label }) => {
  return (
    <div className="flex justify-end">
      <Button
        // style={{
        //   backgroundColor: '#191D88',
        // }}
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
};

export default IconButton;
