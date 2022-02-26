import { Stack } from '@mui/material';
import OrganisationSwitch from '../OrganisationSwitch';
import useUIState from '../../state/hooks/useUIState';
import UserMenu from '../UserMenu';

const SidebarHeader = () => {
  const { UIState } = useUIState();

  const isSidebarCollapsed = UIState.sidebarStatus === 'collapsed';

  return (
    <Stack
      direction={isSidebarCollapsed ? 'column' : 'row'}
      p={1}
      justifyContent="space-between"
    >
      <OrganisationSwitch />
      <UserMenu />
    </Stack>
  );
};

export default SidebarHeader;
