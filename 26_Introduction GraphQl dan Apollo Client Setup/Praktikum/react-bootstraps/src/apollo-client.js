import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://react-alterra.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': '0urG3vBovL1pTgN0VVSINVyV1xQFA6UQOYm0SNHnB65hVc9Bm5LFn0GL9SUw0bYA'
    }
});
