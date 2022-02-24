import { Container } from '@mui/material';
import { FC } from 'react';
import { IShell } from './Shell.interface';

const Shell: FC<IShell> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Shell;
