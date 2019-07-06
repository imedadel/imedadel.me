import Typography from "typography"

const typography = new Typography({
	baseFontSize: `16px`,
	baseLineHeight: 1.64,
	headerFontFamily: [`Fira Sans`, `sans-serif`],
	bodyFontFamily: [`Fira Sans`, `sans-serif`],
	headerColor: `hsla(0,0%,0%,1)`, // try `#2E1FFF` later
	bodyColor: `hsla(0,0%,0%,0.95)`,
	headerWeight: 900,
	bodyWeight: 400,
	boldWeight: 700,
	scaleRatio: 4,
	overrideStyles: ({ rhythm }, options, styles) => ({
		"main, header, footer": {
			maxWidth: rhythm(24),
			margin: `${rhythm(2)} auto`,
		},
		a: {
			color: `hsla(244, 100%, 56%, 1)`,
		},
		"a:hover,a:active": {
			color: `hsla(244, 100%, 56%, 0.95)`,
			textDecoration: `none`,
		},
		".gatsby-highlight": {
			marginBottom: rhythm(1.25),
		},
		".gatsby-highlight-code-line": {
			backgroundColor: `hsla(207, 95%, 16%, 1)`,
			display: `block`,
			marginRight: `-1em`,
			marginLeft: `-1em`,
			paddingRight: `1em`,
			paddingLeft: `1em`,
		},
		"code[class*=language-], pre[class*=language-]": {
			borderRadius: `0.125em`,
			fontFamily: `"Dank Mono","Victor Mono","Fira Code",Consolas,Monaco,Andale Mono,"Ubuntu Mono",monospace`,
		},
		"@media (min-width:480px)": {
			html: {
				fontSize: `18px`,
			},
		},
		"@media (min-width:768px)": {
			html: {
				fontSize: `20px`,
			},
		},
		"@media (min-width:980px)": {
			html: {
				fontSize: `22px`,
			},
		},
		"@media (min-width:1280px)": {
			html: {
				fontSize: `24px`,
			},
		},
	}),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
	typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
