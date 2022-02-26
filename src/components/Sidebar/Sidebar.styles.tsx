import { Box, IconButton, styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { log } from 'console';
import { closedMixin, openedMixin } from '../../theme/utils';
import { IExpandDrawerBgProps } from './Sidebar.interface';

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => {
  return {
    width: 240,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflow: 'visible',
    boxSizing: 'border-box',
    border: '10px solid red',
    ...(open && {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
      },
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
});
