import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const PrestoThemeColor = '#3367D6'

const PrestoTheme = getMuiTheme({
  fontFamily: 'Roboto, SegoeUI, Tahoma, sans-serif',
  palette: {
    primary1Color: PrestoThemeColor,
  },
});

export default PrestoTheme