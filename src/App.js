import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from './config/theme';
import Filter from './Filter/index.js'
import LiffButton from './Liffbutton'

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          {/* <Filter /> */}
          <LiffButton />
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
