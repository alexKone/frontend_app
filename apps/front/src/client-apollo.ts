import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import constants from "./constants";

const httpLink = createHttpLink({
  uri: constants.uri
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(constants.token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path}) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Response: ${JSON.stringify(
          response
        )}`
      );
    })
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    if ('statusCode' in networkError && networkError.statusCode === 401) {
      console.log('unauthorized, should redirect to login and remove localStore');
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(errorLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

export default client;
