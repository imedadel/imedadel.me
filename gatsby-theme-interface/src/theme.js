const theme = {
	space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
	fonts: {
		body: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol"`,
		heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol"`,
	},
	fontSizes: [8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
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
		default: '90vw',
		max: '960px',
	},
	styles: {
		Layout: {
			fontFamily: 'body',
			fontSize: 4,
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
			maxWidth: 'max',
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
					a: {
						textDecoration: 'none',
					},
				},
			},
			'.desc': {
				margin: 0,
				fontSize: 7,
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
				}
			},
		},
		article: {
			margin: 0,
			marginBottom: 4,
		},
		h1: {
			fontSize: 14,
			fontFamily: 'heading',
			fontWeight: 'bold',
			lineHeight: 'heading',
			margin: 0,
			marginTop: 8,
		},
		h2: {
			fontSize: 10,
			fontFamily: 'heading',
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
	},
}

export { theme }
