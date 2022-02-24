import React from 'react';

import {
  ThemeProvider as MIUThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import { ReactNode } from 'react';
import theme from './theme';
import { CssBaseline } from '@mui/material';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <MIUThemeProvider theme={theme}>{children}</MIUThemeProvider>
    </StyledEngineProvider>
  );
}
