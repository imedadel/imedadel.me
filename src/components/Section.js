/** @jsx jsx */
import { css, jsx } from '@emotion/core'

function Section({ title, description, children }) {
	return (
		<section
			css={css`
				margin-top: 2em;
				margin-bottom: 2.25em;
			`}
		>
			<h2
				css={css`
					font-size: 2.5rem;
					font-weight: 700;
					letter-spacing: -0.02em;
					line-height: 1.1;
					margin-bottom: 0.125em;
				`}
				id={title}
			>
				{title}
			</h2>
			<p
				css={css`
					font-size: 1.75rem;
					letter-spacing: -0.02em;
					font-weight: 400;
					line-height: 1.4;
					margin-bottom: 0.75em;
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
