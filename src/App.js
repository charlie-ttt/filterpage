import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from './config/theme';
import Filter from './Filter/index.js'

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <Filter />
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
