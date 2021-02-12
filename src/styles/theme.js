import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    margin: 10,
                    padding: 10,
                    fontWeight: 'inherit',
                    fontStyle: 'inherit',
                    fontSize: '100%',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                },
                body: {
                    backgroundColor: '#64ffda'
                },
                '*, *::before, *::after': {
                    boxSizing: 'inherit'
                  },
            }
        }
    },
    palette: {
        primary: {
            main: '#a7ffeb',
            light: '#64ffda',
            dark: '#1de9b6',
        },
        secondary: {
            dark: '#00bfa',
            main: '#a7ffeb',
            light: '#64ffda',
        }
    }
})