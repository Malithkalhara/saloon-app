import { Add } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const PlusButton = ({ onCLick }) => {
  return (
    <div>
      <IconButton
        aria-label="delete"
        onClick={onCLick}
        style={{
          color: 'white',
          backgroundColor: '#191D88',
          height: '60px',
          width: '60px',
          boxShadow: '0px 4px 22px 0px rgba(0, 0, 0, 0.37)',
        }}
      >
        <Add
          style={{
            height: '40px',
            width: '40px',
          }}
        />
      </IconButton>
    </div>
  );
};

export default PlusButton;
