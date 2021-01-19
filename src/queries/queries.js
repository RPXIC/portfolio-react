export const PROJECTS_QUERY = `query {
	  allProjects {
        id
        title
        description
        stack
        website
        image {
            responsiveImage(imgixParams: { fit: crop, w: 257, h: 460, auto: format }){
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
        }
    }
}`

export const DOCS_QUERY = `query {
  allDocs {
    cv {
      url
    }
  }
}`

export const SEO_QUERY = `query {
  _site{
    favicon {
      url
    }
    globalSeo {
      siteName
      fallbackSeo {
        description
        image {
          url
        }
        title 
      }
    }
  }
}`
