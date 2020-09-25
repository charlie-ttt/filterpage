import { createMuiTheme } from '@material-ui/core/styles';

export const colorTheme = {
  primary: {
    main: '#FF5454',
  },
  secondary: {
    main: '#009DF5',
  },
  default: {
    main: '#828282',
  },
  background: {
    main: '#f7f7f7',
  },
};

export const muiTheme = createMuiTheme({
  palette: {
    ...colorTheme,
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: colorTheme.secondary.main,
      },
    },
    MuiButton: {
      root: {
        color: colorTheme.default.main,
      },
    },
    MuiPickersDay: {
      day: {
        color: colorTheme.secondary.main,
      },
      daySelected: {
        backgroundColor: colorTheme.secondary.main,
        '&:hover': {
          backgroundColor: colorTheme.secondary.main,
        },
      },
      dayDisabled: {
        color: colorTheme.secondary.main,
      },
      current: {
        color: colorTheme.secondary.main,
      },
    },
  },
});
