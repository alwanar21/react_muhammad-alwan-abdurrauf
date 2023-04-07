## (26) Introduction GraphQL and Apollo Client Setup

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. GraphQL adalah salah satu query languange yang dipakai untuk API, serta runtime sisi server untuk mengeksekusi query dengan menggunakan sistem tipe yang Anda tetapkan. GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan graphQL kita dapat menggunakan single endpoint untuk setiap request yang diperlukan.

3 Fungsi utama pada graphQL antara lain :
- query = mendapatkan data berdasarkan query tertentu yang telah kita definisikan
- mutation = berguna untuk insert, update, dan delete data
- Subcription = untuk mendapatkan tanggal terupdate secara realtime / berdasarkan events tertentu.

2. **Hasura** adalah layanan yang menyediakan GraphQL dan Rest API. Dikelola penuh di cloud hasura atau juga bisa self-hosted. dan **Heroku** adalah salah satu platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman yang juga menyediakan database postgres secara gratis.

Konfigurasi Hasura dan Heroku :
- Setelah selesai register hasura dan heroku, buka hasura dan buat project baru. Setelah terbuka dan selesai mengatur server basis data. Klik tab data dan buat database heroku. Setelah selesai membuat database, Anda dapat mengonfigurasi database Anda.
- Buka tab API, gunakan endpoint dan header x-hasura-admin-secret sebagai header
- Untuk mengubah API publik hasura, buka **https://cloud.hasura.io/projects** dan buka konfigurasi
- Lalu buka Env vars, klik HASURA_GRAPHQL_ADMIN_SECRET lalu klik ikon hapus, buka konsol lalu graphql Anda menjadi publik sekarang
- untuk membuat query dan mutation, buka tab API, tulis query Anda atau cukup klik di explorer lalu klik execute. Buat mutation query untuk memasukkan data baru atau update data

3. **Apollo Client** adalah library state management untuk JavaScript yang memungkinkan kita untuk mengelola local dan remote data dengan GraphQL.dan digunakan untuk fetch, cache, and modify data aplikasi, sambil memperbarui UI secara otomatis. library core @apollo/klien menyediakan integrasi bawaan dengan React.Apollo Client bisa melakukan operasi GraphQL apa pun (quey, mutation, dan subcription) di dalam aplikasi React atau Next JS. Apollo Client juga bekerja dengan baik dengan server GraphQL apa pun (Hasura, Apollo Server, dll)