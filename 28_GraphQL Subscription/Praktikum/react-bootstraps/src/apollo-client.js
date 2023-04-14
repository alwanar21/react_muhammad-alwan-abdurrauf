import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';


const httpLink = new HttpLink({
    uri: 'https://react-alterra.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': '0urG3vBovL1pTgN0VVSINVyV1xQFA6UQOYm0SNHnB65hVc9Bm5LFn0GL9SUw0bYA'
    }
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://react-alterra.hasura.app/v1/graphql',
    connectionParams: {
        reconnect: true,
        headers: {
            'x-hasura-admin-secret': '0urG3vBovL1pTgN0VVSINVyV1xQFA6UQOYm0SNHnB65hVc9Bm5LFn0GL9SUw0bYA'
        }
    },
}));

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});


