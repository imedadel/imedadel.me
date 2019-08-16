/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

const TakeMeBack = ({ path }) => {
	return (
		<div
			sx={{
				width: '4vw',
				height: '4vw',
				right: '2vw',
				top: '2vw',
				position: 'absolute',
				transition: 'all .2s',
				backgroundColor: 'accent.0',
				borderRadius: '2vw',
				borderWidth: '2px',
				borderStyle: 'solid',
				borderColor: 'accent.1',
				':hover': {
					backgroundColor: 'accent.1',
					transform: 'scale(1.1)'
				}
			}}
		>
			<Link
				to={path}
				sx={{
					fontSize: 6,
					lineHeight: '66px',
					display: 'block',
					boxSizing: 'border-box',
					textDecoration: 'none',
					width: 'inherit',
					height: 'inherit',
					textAlign: 'center',
					color: 'text',
					lineHeight: 2.45,
				}}
			>
				↩︎
			</Link>
		</div>
	)
}

export default TakeMeBack
