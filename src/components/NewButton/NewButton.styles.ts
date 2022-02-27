import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

export const NewButtonBase = styled('button')`
  font-weight: medium;
  font-size: 0.875rem;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 8px;
  color: #707070;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  display: flex;

  align-items: center;

  &:hover {
    color: #171618;
    background-color: #e6e6e6;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
