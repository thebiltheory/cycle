import { Typography } from '@mui/material';
import { FC } from 'react';
import { FiPlus } from 'react-icons/fi';
import { NewButtonBase } from './NewButton.styles';

interface INewButtonProps {
  fullWidth: boolean;
  textAlign?: 'left' | 'center' | 'right';
  label: string;
  onClick?: () => void;
}

const NewButton: FC<INewButtonProps> = ({
  fullWidth,
  textAlign = 'left',
  label,
  ...props
}) => {
  return (
    <NewButtonBase
      sx={{
        textAlign,
        width: fullWidth ? '100%' : 'auto',
      }}
      {...props}
    >
      <FiPlus style={{ marginRight: '4px' }} />
      <Typography display="block">{label}</Typography>
    </NewButtonBase>
  );
};

export default NewButton;
