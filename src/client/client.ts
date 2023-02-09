import { GraphQLClient } from 'graphql-request';
import { env } from '../env/client.mjs';
// import { graphql } from "../gql";

const client = new GraphQLClient(env.NEXT_PUBLIC_API_URL);
export default client;

// query example

// export const getEventsQueryDocument = graphql(`
//   query getEventsQuery {
//     events {
//       name
//       id
//       time
//     }
//   }
// `);
