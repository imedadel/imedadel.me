import Typography from "typography"

const typography = new Typography({
  baseFontSize: `24px`,
  baseLineHeight: 1.64,
  headerFontFamily: [`Fira Sans`, `sans-serif`],
  bodyFontFamily: [`Fira Sans`, `sans-serif`],
  headerColor: `#2E1FFF`, // try `#2E1FFF` later
  bodyColor: `hsla(0,0%,0%,0.95)`,
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
export const rhythm = typography.rhythm
export const scale = typography.scale