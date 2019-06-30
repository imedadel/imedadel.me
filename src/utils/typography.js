import Typography, { scale } from "typography"
// import deYoungTheme from 'typography-theme-de-young'

// deYoungTheme.googleFonts = [
//     {
//         name: 'Fira Sans',
//         styles: ['900']
//     }
// ];

// deYoungTheme.overrideThemeStyles = ({ rhythm }, options) => ({
//     h1: {
//         fontSize: '6rem',
//         margin: rhythm(1),
//         position: 'absolute',
//         bottom: 0,
//         fontFamily: 'Fira Sans',
//         fontWeight: 900,
//         color: '#000'
//     },
//     small: {
//       fontSize: '3rem',
//       paddingLeft: '1rem'
//     }
//   });

// const typography = new Typography(deYoungTheme)
const typography = new Typography({
  baseFontSize: `24px`,
  baseLineHeight: 1.64,
  headerFontFamily: [`Fira Sans`, `sans-serif`],
  bodyFontFamily: [`Fira Sans`, `sans-serif`],
  headerColor: `hsla(0,0%,0%,0.9)`, // try `#2E1FFF` later
  bodyColor: `hsla(0,0%,0%,0.9)`,
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  scaleRatio: 4,
  overrideStyles: ({rhythm}, options, styles) => ({
    main: {
      maxWidth: rhythm(24),
      margin: `${rhythm(2)} auto`,
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
  }

export default typography