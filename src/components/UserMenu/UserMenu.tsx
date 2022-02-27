import { Avatar, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { user } from '../../mocks/user';
import useUIState from '../../state/hooks/useUIState';
import DropdownButton from '../DropdownButton';
import Menu from '../Menu';

const UserMenu = () => {
  const { UIState } = useUIState();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isSidebarCollapsed = UIState.sidebarStatus === 'collapsed';

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DropdownButton onClick={handleClick}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{
              bgcolor: '#2E48ED',
              border: '2px solid white',
              outline: '2px solid #2E48ED',
              width: 24,
              height: 24,
            }}
            alt="Remy Sharp"
            src={user.avatar}
          >
            B
          </Avatar>
          {!isSidebarCollapsed && <HiChevronDown />}
        </Stack>
      </DropdownButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Log out
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
