/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'

function Reset() {
	return (
		<Global
			styles={css`
				*,
				*::before,
				*::after {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					position: relative;
				}
				:root {
					color: hsl(0, 0%, 0%);
					background-color: lavenderblush;
					font-family: Inter, system-ui, sans-serif;
					font-size: calc(14px + 0.75vw);
					text-rendering: optimizeLegibility;
					-webkit-font-smoothing: antialiased;
				}
				a {
					color: inherit;
					outline: none;
					text-decoration: none;
					background-image: linear-gradient(lightpink, lightpink);
					background-size: 100% 0.5em;
					background-repeat: no-repeat;
					background-position: left 0 bottom -40%;
				}
			`}
		/>
	)
}

export default Reset
