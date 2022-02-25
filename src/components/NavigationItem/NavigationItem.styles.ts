import { styled } from '@mui/system';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const black = {
  303030: '#303030',
  242424: '#242424',
};

export const NavigationItemBase = styled('div')`
  font-weight: bold;
  font-size: 0.875rem;
  padding: 8px 24px;
  border-radius: 4px;
  color: #999999;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &.${buttonUnstyledClasses.active} {
    background-color: 'red';
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
