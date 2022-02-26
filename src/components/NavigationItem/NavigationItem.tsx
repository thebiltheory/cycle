import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Box, Stack } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';
import useUIState from '../../state/hooks/useUIState';
import { INavigationItemProps } from './NavigationItem.interface';
import { NavigationItemBase } from './NavigationItem.styles';

const NavigationItem: FC<INavigationItemProps> = ({
  variant = 'main',
  leftElement,
  rightElement,
  onClick,
  hideRightElementUntilHover = false,
  label,
  to,
  ...props
}) => {
  const [hideRightElement, setHideRightElement] = useState(
    hideRightElementUntilHover,
  );

  const { UIState } = useUIState();
  const resolved = useResolvedPath(to);
  const active = useMatch({ path: resolved?.pathname, end: true });

  const styleProps: any = {
    main: {
      iconSpacing: 1,
      sx: {
        fontWeight: 'bold',
        '&:hover': {
          color: '#ffffff',
          backgroundColor: '#242424',
        },
      },
    },
    secondary: {
      iconSpacing: 2,
      sx: {
        fontWeight: 'medium',
        '&:hover': {
          color: '#ffffff',
          backgroundColor: '#303030',
        },
      },
    },
    active: {
      sx: {
        color: '#ffffff',
        backgroundColor: active ? '#102DEA' : 'inherit',
      },
    },
  };

  const onClickHandler = (event: MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const onHoverHandler = () => {
    setHideRightElement(!hideRightElement);
  };

  return (
    <ButtonUnstyled
      to={to}
      component={NavigationItemBase}
      {...props}
      {...(true && styleProps.collapsed)}
      {...styleProps[variant]}
      {...(active && styleProps.active)}
      {...(onClick && { onClick: onClickHandler })}
      {...(hideRightElementUntilHover && {
        onMouseEnter: onHoverHandler,
        onMouseLeave: onHoverHandler,
      })}
      sidebarStatus={UIState.sidebarStatus}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        flex={1}
        alignItems="center"
      >
        <Stack
          direction="row"
          spacing={styleProps[variant]?.iconSpacing}
          alignItems="center"
        >
          {leftElement && <Box p={0}>{leftElement}</Box>}
          {UIState.sidebarStatus === 'extended' && <Box>{label}</Box>}
        </Stack>
        {UIState.sidebarStatus === 'extended' &&
          rightElement &&
          !hideRightElement && <Box>{rightElement}</Box>}
      </Stack>
    </ButtonUnstyled>
  );
};

export default NavigationItem;
