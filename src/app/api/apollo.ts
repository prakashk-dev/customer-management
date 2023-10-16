import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import awsconfig from "../aws-exports";

const uri = awsconfig.aws_appsync_graphqlEndpoint;

const httpLink = new HttpLink({
  uri,
  headers: {
    "x-api-key": awsconfig.aws_appsync_apiKey,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
