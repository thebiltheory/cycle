import { Box, Divider, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';
import { CgExtensionAdd } from 'react-icons/cg';
import { HiChevronDown } from 'react-icons/hi';
import { ReactComponent as CycleLogo } from '../../assets/logos/cycle-logo.svg';
import { organisations } from '../../mocks/organisations';
import useUIState from '../../state/hooks/useUIState';
import DropdownButton from '../DropdownButton';
import Menu from '../Menu';

const OrganisationSwitch = () => {
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
          <CycleLogo />
          {!isSidebarCollapsed && (
            <>
              <Box component="span">Cycle</Box>
              <HiChevronDown />
            </>
          )}
        </Stack>
      </DropdownButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {organisations.map(({ id, name }: any) => {
          return (
            <MenuItem key={id} onClick={handleClose} disableRipple>
              {name}
            </MenuItem>
          );
        })}
        <Divider />
        <MenuItem onClick={handleClose} disableRipple>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CgExtensionAdd />
            <span>Add organisation</span>
          </Stack>
        </MenuItem>
      </Menu>
    </>
  );
};

export default OrganisationSwitch;
