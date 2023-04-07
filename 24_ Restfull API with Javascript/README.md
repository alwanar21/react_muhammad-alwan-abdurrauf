## (24) Restfull API with Javascript

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. Untuk mendapatkan API kita bisa menggunakan Open API untuk dummy data dan endpoint yang disebut juga fake API. Fake API / Mock Api digunakan sebagai simulasi endpoint bagi frontend, agar front end dan backend dapt berjalan beriringan meskipun endpoint asli belum selesai dibuat. adapun keuntungan dari Mock API adalah sebagai berikut :

- Front-end , mobile, dan juga Backend dapat berjalan bersamaan
- Mendapatkan feedback lebih cepat
- dapat mengetahui isu dan masalah lebih awal dan lebih cepat
- Developing test dan API secara bersamaan

beberapa Mock API yang tersedia antara lain :
- Mockon
- Beeceptor
- Mocki
- Stoplight
- Mock API
- Mocky
- Postman Mock Server


2. Cara memakai Mock API anata lain :
- Kunjungi mockapi.io, silahkan klik login dan pilih login menggunakan google account.
- create project, dan isi nama project dengan nama yang anda inginkan seperti "project_dummy" lalu click button for create project maka project article telah dibuat.
- buat resource dengan cara click resource button, lalu isi nama resource dengan article, click button for create resource maka resource telah dibuat.
- anda bisa membuat data secara manual atau anda bisa mengenerate data dengan cara click generate all lalu tentukan key dan juga jenis value data anda, lalu pilih jumlah data yang akan anda generate(default jumlah data adalah 50).
- setelah data dibuat, kita bisa melihat endpoint untuk mengakses data mock api dengan cara click edit 


3. setelah kita mendapatkan endpoint dari data yang telah kita buat, kita dapat mengakses endpoint tersebut berdasarkan method yang diizinkan. berikut contoh pengaksesan data tersebut menggunakan javascript :


```
fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

```
Pada contoh di atas, fetch() digunakan untuk mengambil data dari URL 'https://jsonplaceholder.typicode.com/todos/'. Kemudian, response.json() digunakan untuk mengubah data respons dari format JSON menjadi objek JavaScript. Terakhir, data objek JavaScript tersebut ditampilkan di console.Selain menggunakan metode GET, kita dapat menggunakan method lain seperti POST, PUT, DELETE, dan lainnya.