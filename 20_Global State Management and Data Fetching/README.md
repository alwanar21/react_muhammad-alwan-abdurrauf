## (20) Global State Management and Data Fetching

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. Mengenai global state ada kalanya kita kesusahan untuk mengatur dan mengimplementasikannya jika state banyak digunakan di banyak component. oleh karena itu ada sebuah library untuk global state management bernama **Redux**. dan waktu yang tepat untuk menggunakan Redux adalah :
- Banyak state yang perlu ditaruh di banyak tempat
- State pada app sering berubah
- Logic untuk mengubah state kompleks
- Ukuran codebase yang besar dan dikerjakan banyak orang
- Perlu mengetahui bagaimana state diupdate seiring dengan waktu

Redux libraries & Tools
- React-Redux
- Redux  Toolkit
- Redux DevTools extension

Komponen Penting di Redux
- actions
- Reducer
- Store

2. **Redux Thunk** adalah Thunk Middleware untuk resux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.kita memerlukan Redux Thunk untuk menhandle side effect logic yang kompleks dan untuk logix async seperti request data.

3. **Hasura GraphQL Engine** adalah sebuah server GraphQL ultra-cepat yang menyediakan API GraphQL instan dan real-time diatas Postgres, dengan pemicu webhook pada event basis data, dan skema jarak jauh untuk mengimplementasi logika bisnis.

**Postman** adalah platform API untuk membangun dan menggunakan API.alasan menggunakan Postman antara lain ;
- mudah berkolaborasi secara Syncrhronus dengan anggota lain
- tampilan yang simple
- gratis sampai 3 member dan unlimited collection

**Mock api** adalah wadah untuk mensimulasikan API untuk mendapatlan request dan response secara actual.


**Axios** adalah http client library untuk Javascript. digunakan untuk request dari front end ke backend.
 