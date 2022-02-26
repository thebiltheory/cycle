import { Box, Divider, Stack } from '@mui/material';
import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import BoardsNavigator from '../../routes/Boards.navigator';
import MainNavigator from '../../routes/Main.navigator';
import useUIState from '../../state/hooks/useUIState';
import { Drawer, ExpandDrawerBg, ExpandDrawerButton } from './Sidebar.styles';

const Sidebar = () => {
  const { UIState, dispatch } = useUIState();

  const [visible, setVisible] = useState(false);

  const onExpandSidebar = () => {
    const sidebarAction =
      UIState.sidebarStatus === 'extended'
        ? 'COLLAPSE_SIDEBAR'
        : 'EXTEND_SIDEBAR';

    dispatch(sidebarAction);
  };

  const onHoverExpand = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Stack
        direction="row"
        position="relative"
        overflow="visible"
        height="100vh"
      >
        <Drawer
          variant="permanent"
          open={UIState.sidebarStatus === 'extended'}
          PaperProps={{ sx: { border: 'none' } }}
        >
          <Stack
            bgcolor="black"
            width="240px"
            color="white"
            height="100vh"
            divider={<Divider />}
          >
            <MainNavigator />
            <BoardsNavigator />
          </Stack>
        </Drawer>
        <ExpandDrawerBg
          onMouseEnter={onHoverExpand}
          onMouseLeave={onHoverExpand}
          visible={visible}
        >
          {visible && (
            <ExpandDrawerButton onClick={onExpandSidebar} size="small">
              {UIState.sidebarStatus !== 'extended' ? (
                <HiChevronRight color="white" />
              ) : (
                <HiChevronLeft color="white" />
              )}
            </ExpandDrawerButton>
          )}
        </ExpandDrawerBg>
      </Stack>
    </>
  );
};

export default Sidebar;
