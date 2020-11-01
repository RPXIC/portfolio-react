import { GraphQLClient } from 'graphql-hooks'

export const client = new GraphQLClient({
    url: "https://graphql.datocms.com/",
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    }
})