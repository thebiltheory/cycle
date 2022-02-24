import React from 'react';

import {
  ThemeProvider as MIUThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import { ReactNode } from 'react';
import theme from './theme';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      <MIUThemeProvider theme={theme}>{children}</MIUThemeProvider>
    </StyledEngineProvider>
  );
}
