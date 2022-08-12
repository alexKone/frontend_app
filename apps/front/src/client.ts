import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client;
