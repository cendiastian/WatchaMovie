import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

// const client = new ApolloClient({
//   uri: "https://kmxalterra.hasura.app/v1/graphql",
//   cache: new InMemoryCache(),
//   headers: {
//    'x-hasura-admin-secret':'Daj8prjrvFmrRIYAzfVVzLP59QIPyj34lCP8oztQwHr1uWb6H7oWA0bAVZjcxOj6'
//   }
// });

const httpLink = new HttpLink({
  uri: "https://kmxalterra.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "Daj8prjrvFmrRIYAzfVVzLP59QIPyj34lCP8oztQwHr1uWb6H7oWA0bAVZjcxOj6",
  },
});

 const wsLink = new WebSocketLink({
  uri: "wss://kmxalterra.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "Daj8prjrvFmrRIYAzfVVzLP59QIPyj34lCP8oztQwHr1uWb6H7oWA0bAVZjcxOj6",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});