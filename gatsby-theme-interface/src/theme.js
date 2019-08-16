import { isAbsolute } from "path";
import { unstyle } from "ansi-colors";

const tracking = (z, a = -0.0223, b = 0.185, c = -0.1745) =>
	a + b * Math.exp(z * c)

const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 960

// 1/100 = x/windowWidth =>

const vw = (multiplier, ww = windowWidth) => (ww / 100) * multiplier

const theme = {
	space: [
		0,
		0.25,
		0.5,
		0.75,
		1,
		1.25,
		1.5,
		1.75,
		2,
		2.25,
		2.5,
		2.75,
		3,
		4,
		5,
		6,
	].map(x => x + 'vw'),
	fonts: {
		body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol"`,
		heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol"`,
	},
	fontSizes: [
		0.25,
		0.5,
		0.75,
		1,
		1.25,
		1.5,
		1.75,
		2,
		2.25,
		2.5,
		2.75,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
	].map(x => x + 'vw'),
	letterSpacings: [
		0.25,
		0.5,
		0.75,
		1,
		1.25,
		1.5,
		1.75,
		2,
		2.25,
		2.5,
		2.75,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
	].map(x => tracking(vw(x)) + 'em'),
	lineHeights: {
		body: 1.64,
		heading: 1.12,
	},
	colors: {
		gray: ['#efefef', '#ddd', '#222'],
		accent: [
			'#FAFAFA',
			'#EAEAEA',
			'#999999',
			'#888888',
			'#666666',
			'#444444',
			'#333333',
			'#111111',
		],
		success: {
			light: '#3291FF',
			default: '#0070F3',
			dark: '#0366D6',
		},
		background: '#fff',
		primary: '#0070F3', // success.default
		text: '#000',
	},
	sizes: {
		default: '64vw',
		max: '960px',
	},
	styles: {
		root: {
			fontFamily: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", "Segoe UI Symbol"`,
			'@supports (font-variation-settings: normal)': {
				fontFamily: `'Inter var', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", "Segoe UI Symbol"`,
			},
		},
		Layout: {
			fontSize: 6,
			letterSpacing: 6,
			lineHeight: 'body',
		},
		Header: {
			display: 'flex',
			justifyContent: 'space-between',
			fontWeight: 'bold',
			margin: '0 auto',
			maxWidth: 'max',
			padding: 3,
			width: 'default',
		},
		Main: {
			margin: '0 auto',
			marginTop: 8,
			width: 'default',
		},
		Footer: {
			margin: '0 auto',
			maxWidth: 'max',
			width: 'default',
		},
		Flex: {
			display: 'flex',
		},
		Container: {
			padding: 3,
			article: {
				marginBottom: 8,
				'.title': {
					margin: 0,
					marginBttom: 2,
					fontSize: 8,
					letterSpacing: 8,
					fontWeight: 400,
					a: {
						textDecoration: 'none',
						transition: 'all .4s ease-out',
						':hover': {
							paddingLeft: 6,
							color: 'primary',
						}
					},
				},
			},
			'.desc': {
				margin: 0,
				fontSize: 8,
				letterSpacing: 8,
				fontWeight: '200',
				borderLeft: '1px solid',
				borderBottom: '1px solid',
				borderBottomLeftRadius: 12,
				paddingLeft: 12,
				marginLeft: 12,
				paddingBottom: 6,
				paddingTop: 2,
				marginTop: 10,
				marginBottom: 10,
				p: {
					margin: 0,
				},
			},
		},
		article: {
			margin: 0,
			marginBottom: 4,
		},
		h1: {
			fontSize: 14,
			letterSpacing: 14,
			fontWeight: 'bold',
			lineHeight: 'heading',
			margin: 0,
			marginTop: 8,
		},
		h2: {
			fontSize: 10,
			letterSpacing: 10,
			fontWeight: 'bold',
			lineHeight: 'heading',
			margin: 0,
			marginTop: 14,
		},
		h3: {
			marginTop: 14,
		},
		h4: {
			marginTop: 14,
		},
		h5: {
			marginTop: 14,
		},
		h6: {
			marginTop: 14,
		},
		a: {
			color: 'primary',
		},
		code: {
			borderRadius: 0.125 + 'em',
			padding: 1,
		},
		pre: {
			borderRadius: 0.125 + 'em',
		},
	},
}

export { theme, tracking }
