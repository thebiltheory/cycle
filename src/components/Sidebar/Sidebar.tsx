import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import MainNavigator from '../../routes/Main.navigator';
import NavigationItem from '../NavigationItem';
import NavigationItemMenu from '../NavigationItem/NavigationItemMenu';
import { Drawer, ExpandDrawerBg, ExpandDrawerButton } from './Sidebar.styles';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);

  const onExpandSidebar = () => {
    setOpen(!open);
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
          open={open}
          PaperProps={{ sx: { border: 'none' } }}
        >
          <Box bgcolor="black" width="240px" color="white" height="100vh">
            <MainNavigator />
          </Box>
        </Drawer>
        <ExpandDrawerBg
          onMouseEnter={onHoverExpand}
          onMouseLeave={onHoverExpand}
          visible={visible}
        >
          {visible && (
            <ExpandDrawerButton onClick={onExpandSidebar} size="small">
              {!open ? (
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
