import Typography, { scale } from "typography"
import deYoungTheme from 'typography-theme-de-young'

deYoungTheme.googleFonts = [
    {
        name: 'Fira Sans',
        styles: ['900']
    }
];

deYoungTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    h1: {
        fontSize: '6rem',
        margin: rhythm(1),
        position: 'absolute',
        bottom: 0,
        fontFamily: 'Fira Sans',
        fontWeight: 900,
        color: '#000'
    },
    small: {
      fontSize: '3rem',
      paddingLeft: '1rem'
    }
  });

const typography = new Typography(deYoungTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
  }

export default typography