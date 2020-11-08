import React from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'graphql-hooks'
import { SEO_QUERY } from 'queries/queries'

const Seo = () => {
    const { loading, error, data } = useQuery(SEO_QUERY)

    if (error) return <Helmet><title>Error SEO</title></Helmet>

    if (loading) return <Helmet><title>Loading...</title></Helmet>

    const { _site: { favicon, globalSeo: { siteName, fallbackSeo: { description, image } } } } = data

    return (  
        <Helmet>
            <title>{siteName}</title>
            <meta name="description" content={description}/>
            <link rel="icon" href={favicon.url} />
            <meta property="og:title" content={siteName} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image.url} />      
            <meta property="og:url" content="https://portfolio-rpxic.vercel.app/" />
        </Helmet>
    )
}

export default Seo