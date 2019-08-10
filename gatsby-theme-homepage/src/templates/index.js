import React from 'react'

const maxHeight =
	typeof window === `undefined` ? 0 : `${window.innerHeight - 16}px`

const Page = () => (
	<div
		style={{
			display: `flex`,
			alignItems: `center`,
			justifyContent: `center`,
			width: `100%`,
			minHeight: maxHeight,
			textAlign: `center`,
			alignItems: `center`,
			fontSize: `5vw`,
			fontFamily: `Manrope, system-ui`,
			fontWeight: `900`,
			webkitFontSmoothing: `antialiased`,
			textRendering: `optimizeLegibility`,
		}}
	>
		Imed Adel.
	</div>
)

export default Page
