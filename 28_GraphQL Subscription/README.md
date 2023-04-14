
## (28) GraphQL Subscription

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1.Subscription adalah salah satu fitur utama pada GraphQL yang memungkinkan pengguna untuk berlangganan (subscribe) pada suatu data yang dikeluarkan oleh server secara real-time. Subscription pada GraphQL dapat dianggap sebagai versi yang ditingkatkan dari Query, di mana pengguna dapat terus-menerus memperbarui data pada aplikasi mereka tanpa perlu melakukan permintaan ulang (re-request) ke server.

Dalam subscription, pengguna melakukan permintaan kepada server untuk mendapatkan data baru ketika data pada server berubah, tanpa harus melakukan polling data secara terus-menerus pada interval waktu tertentu. Hal ini sangat berguna dalam membuat aplikasi real-time seperti aplikasi chatting, notifikasi real-time, dan lain sebagainya.


2. Subscription dasar pada graphQL bisa dilakukan sebagai berikut :
- Install subscriptions-transport-ws untuk memungkinkan websocket connection
```
yarn add @apollo/client subscriptions-transport-ws 
```
- import module yang dibutuhkan.
- buat httpLink untuk query dan mutation serta buat wslink untuk subscription
```
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:4000/subscriptions',
}));
```
- tambahkan spiltFunction
```
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
```
- Di klien aplikasi Anda, Anda menentukan bentuk setiap subscription yang Anda inginkan untuk dijalankan oleh Klien Apollo.
```
const COMMENTS_SUBSCRIPTION = gql`
  subscription OnCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      id
      content
    }
  }
`;
```
- anda bisa menggunakan use subsription untuk mensubscribe subscription, yang mempunyai perlakuan yang sama seperti useQuery pada summary sebelumnya

```
const { data, loading } = useSubscription();
```

3. **subscribeToMore** adalah fungsi pada klien Apollo GraphQL yang memungkinkan pengguna untuk melakukan langganan pada suatu query atau mutasi. Fungsi ini memungkinkan pengguna untuk menerima pembaruan secara real-time ketika ada perubahan pada data yang terkait dengan query atau mutasi yang sedang dilakukan. contoh kodenya sebagai berikut :
```
 const unsubscribe = subscribeToMore({
      document: MY_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newObject = subscriptionData.data.newObject;
        return { myQuery: [newObject, ...prev.myQuery] };
      }
    });
```