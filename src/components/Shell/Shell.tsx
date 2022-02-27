import { Box, Stack } from '@mui/material';
import { FC } from 'react';
import Sidebar from '../Sidebar';
import { IShell } from './Shell.interface';

const Shell: FC<IShell> = ({ children }) => {
  return (
    <Stack direction="row" height="100vh">
      <Sidebar />
      <Box overflow="hidden">{children}</Box>
    </Stack>
  );
};

export default Shell;
