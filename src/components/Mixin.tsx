import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {AppTheme} from 'constants/theme';
import React from 'react';
import {RequireChildren} from 'type';

/**
 * グローバルコンテキストのプロバイダーなどを定義する
 */
const Mixin: React.FC<RequireChildren> = ({children}) => {
  return (
    // ThemeはErrorBoundaryでも使うのでErrorBoundaryよりも外側
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Mixin;
