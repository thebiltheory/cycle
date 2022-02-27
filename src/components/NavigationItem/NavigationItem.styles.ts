import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const NavigationItemBase = styled(Link)`
  font-weight: bold;
  font-size: 0.875rem;
  padding: 8px;
  border-radius: 4px;
  color: #999999;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  align-items: center;
  display: flex;
  flex: 1;
  height: 32px;
  text-decoration: none;

  ${({ sidebarStatus }: any) => {
    if (sidebarStatus === 'collapsed') {
      return `
        justify-content: center;
        align-items center;
        width: 32px;
      `;
    }
  }}

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
