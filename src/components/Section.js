/** @jsx jsx */
import { css, jsx } from '@emotion/core'

function Section({ title, description, children }) {
	return (
		<section
			css={css`
				margin-top: 2em;
				margin-bottom: 2.5em;
			`}
		>
			<h2
				css={css`
					font-weight: 700;
					letter-spacing: -0.02em;
					margin-bottom: 0.125em;
				`}
				id={title}
			>
				{title}
			</h2>
			<p
				css={css`
					font-size: calc(1rem * 1.618);
					letter-spacing: -0.02em;
					font-weight: 400;
					line-height: 1;
					color: dimgrey;
				`}
			>
				{description}
			</p>
			{children}
		</section>
	)
}

export default Section
