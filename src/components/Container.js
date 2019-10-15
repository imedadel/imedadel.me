/** @jsx jsx */
import { css, jsx } from '@emotion/core'

function Container({ children }) {
	return (
		<div
			css={css`
				max-width: 40em;
				margin: 2em auto;
			`}
		>
			{children}
		</div>
	)
}

export default Container
