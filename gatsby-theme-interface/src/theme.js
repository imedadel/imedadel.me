const theme = {
	space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
	fonts: {
		body: 'Manrope, system-ui',
		heading: 'Manrope, system-ui',
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
					}
				},
				'.description': {
					margin: 0,
					fontSize: 3
				},
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
			marginTop: 4,
		},
		h2: {
			fontSize: 10,
			fontFamily: 'heading',
			fontWeight: 'bold',
			lineHeight: 'heading',
			margin: 0,
			marginTop: 4,
		},
		a: {
			color: 'primary',
		},
	},
}

export { theme }
