import React, { FC } from 'react';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          overflow: 'hidden',
        },
        body: {
          height: '100%',
        },
        '#__next': {
          height: '100%',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Montserrat',
      fontSize: 24,
      fontWeight: 600,
      lineHeight: '30px',
    },
  },
  palette: {
    text: {
      primary: '#333333',
    },
    primary: {
      main: '#1D1F4F',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#5B994C',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

export const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
