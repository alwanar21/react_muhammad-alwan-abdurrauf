
## (27) GraphQL Query and Mutation

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. Pengertian Query dan Mutation
- **Query**: Query digunakan untuk mengambil data dari server. Dalam GraphQL, pengguna dapat menentukan data yang ingin diambil dan struktur data yang diinginkan.

- **Mutation**: Mutation digunakan untuk mengubah atau memperbarui data yang ada di server. Dalam GraphQL, pengguna dapat menentukan operasi yang ingin dilakukan (misalnya, menambahkan data baru atau memperbarui data yang sudah ada) dan data yang akan diubah. 

pada kali ini untuk merequest graphQL kita memakai Apollo client


2. Query dasar pada graphQL bisa dilakukan sebagai berikut :
- import gql dan juga useQuery dari apollo client,gql function digunakan untuk mendefinisikan query GraphQL kita. kemudian tulis query yang anda perlukan :
```
import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
```
- ambil value dari server menggunakan useQuery.selain data response, usequery disini juga mengembalikan response berupa loading,error, dan lain-lain
```

function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (

  );
}
```
- consume data yang telah diambil melalui data diatas di jsx
```
    <select name='dog' onChange={onDogSelected}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>

```

3. mutation dalam bebrapa method dilakukan sebagai berikut
- import useMutation
```
import { gql, useMutation } from '@apollo/client';
```
- definisikan mutation
```
const INCREMENT_COUNTER = gql`
  mutation IncrementCounter {
    currentValue
  }
`;
```
- invoke mutateFunction
```
const [mutateFunction, { data, loading, error }] = useMutation(INCREMENT_COUNTER);
```

- kita bisa melakukan hal yang sama untuk update dan delete dengan mengubah sedikit codenya