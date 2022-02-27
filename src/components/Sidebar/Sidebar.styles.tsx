import { Box, IconButton, styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { sidebarWidth } from '../../constants/ui';
import { closedMixin, openedMixin } from '../../theme/utils';
import { IExpandDrawerBgProps } from './Sidebar.interface';

export const Drawer = styled<any>(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => {
  return {
    width: sidebarWidth.extended,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflow: 'visible',
    boxSizing: 'border-box',
    border: '10px solid red',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  };
});

export const ExpandDrawerBg = styled(Box)(
  ({ visible }: IExpandDrawerBgProps) => ({
    background: visible
      ? 'linear-gradient(172deg, rgba(46,72,237,1) 0%, rgba(46,72,237,0) 70%)'
      : 'none',
    position: 'relative',
    width: 4,
    overflow: 'visible',
    zIndex: 1200,
  }),
);

export const ExpandDrawerButton = styled(IconButton)({
  backgroundColor: '#2E48ED',
  position: 'absolute',
  left: -13,
  top: 16,

  '&:hover': {
    backgroundColor: '#2E48ED',
  },
});
