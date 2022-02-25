import { Box, Stack } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { INavigationItemProps } from './NavigationItem.interface';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { NavigationItemBase } from './NavigationItem.styles';
import { Link, To, useMatch, useResolvedPath } from 'react-router-dom';

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
      console.log('onClickHandler');
      onClick(event);
    }
  };

  const onHoverHandler = () => {
    setHideRightElement(!hideRightElement);
  };

  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <ButtonUnstyled
        component={NavigationItemBase}
        {...props}
        {...styleProps[variant]}
        {...(active && styleProps.active)}
        {...(onClick && { onClick: onClickHandler })}
        {...(hideRightElementUntilHover && {
          onMouseEnter: onHoverHandler,
          onMouseLeave: onHoverHandler,
        })}
      >
        <Stack direction="row" justifyContent="space-between" flex={1}>
          <Stack
            direction="row"
            spacing={styleProps[variant]?.iconSpacing}
            alignItems="center"
          >
            {leftElement && <Box>{leftElement}</Box>}
            <Box>{label}</Box>
          </Stack>
          {/* {rightElement && !hideRightElement && <Box>{rightElement}</Box>} */}
          {true && <Box>{rightElement}</Box>}
        </Stack>
      </ButtonUnstyled>
    </Link>
  );
};

export default NavigationItem;
