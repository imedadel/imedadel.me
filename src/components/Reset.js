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
					line-height: 1.5;
					text-rendering: optimizeLegibility;
					-webkit-font-smoothing: antialiased;
				}

				h1 {
					font-size: calc(1rem * 1.618 * 1.618 * 1.618);
					line-height: 1;
					margin-top: 0.5em;
					margin-bottom: 1em;
				}

				h2 {
					font-size: calc(1rem * 1.618 * 1.618);
					line-height: 1;
					margin-top: 0.5em;
					margin-bottom: 0.5em;
				}

				h3 {
					font-size: calc(1rem * 1.618);
					line-height: 1.5;
					margin-top: 0.5em;
					margin-bottom: 0em;
				}

				h4 {
					font-size: 1rem;
					line-height: 1.5;
					margin-top: 0.5em;
					margin-bottom: 0em;
				}

				h5 {
					font-size: 1rem;
					line-height: 1.5;
					margin-top: 0.5em;
					margin-bottom: 0em;
				}

				p,
				ul,
				ol,
				pre,
				table,
				blockquote {
					margin-top: 0;
					margin-bottom: 1em;
				}

				ul ul,
				ol ol,
				ul ol,
				ol ul {
					margin-top: 0;
					margin-bottom: 0;
				}

				hr {
					border: 1px solid;
					margin: -1px 0;
				}

				a,
				b,
				i,
				strong,
				em,
				small,
				code {
					line-height: 0;
				}

				sub,
				sup {
					line-height: 0;
					position: relative;
					vertical-align: baseline;
				}

				sup {
					top: -0.5em;
				}

				sub {
					bottom: -0.25em;
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
