/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Helmet } from 'react-helmet'

function Seo({ slug, description, title }) {
	return (
		<Helmet defer={false}>
			<meta charSet='utf-8' />
			<title>{title ? `${title} — Imed Adel` : `Imed Adel`}</title>
			<link rel='canonical' href={`https://imedadel.me/${slug ? slug : ``}`} />
			<html lang='en' />
			<meta
				name='viewport'
				content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover'
			/>
			<meta
				name='google-site-verification'
				content='zTgLUUdv7vAoD9OEXQf1Lurh9PxlHof08WW1h3p1cgw'
			/>
			<meta name='msvalidate.01' content='D2ECEF51E4DAF349AA4E295011F6A257' />
			<meta
				name='description'
				content={description ? description : `A blog by Imed Adel`}
			/>

			<meta
				property='og:url'
				content={`https://imedadel.me/${slug ? slug : ``}`}
			/>
			<meta property='og:type' content={slug ? `article` : `website`} />
			<meta property='og:locale' content='en' />
			<meta property='og:site_name' content='Imed Adel' />
		</Helmet>
	)
}

export default Seo
