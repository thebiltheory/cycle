import { Box, Menu, MenuItem } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IActionMenuProps } from './ActionMenu.interface';
import { ActionMenuIcon } from './ActionMenu.styles';

const menuItems: any = [
  {
    id: 1,
    label: 'Action 1',
    onClick: () => console.log('Action 1 Performed'),
  },
  {
    id: 2,
    label: 'Action 2',
    onClick: () => console.log('Action 2 Performed'),
  },
];

const ActionMenu: FC<IActionMenuProps> = ({ variant = 'light' }) => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);

  const onClickHandle = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event?.currentTarget);
  };
  const onCloseHandle = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <ActionMenuIcon onClick={onClickHandle}>
        <HiDotsHorizontal color={variant === 'light' ? 'white' : '#999999'} />
      </ActionMenuIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={onCloseHandle}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map(({ id, onClick, label }: any) => {
          const onClickHandler = () => {
            onClick();
            setAnchorEl(null);
          };
          return (
            <MenuItem key={id} onClick={onClickHandler}>
              {label}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default ActionMenu;
