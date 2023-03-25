## (19) React Form

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. **Form** adalah sesuatu yang penting pada pengembangan web yaitu digunakan untuk menghandle inputan dari user seperti kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, dan masih banyak lagi.

Elemen-elemen pada form antara lain :
- <input>
- <textarea>
- <radio>
- <select>
- radio button
- checkbox

untuk elemen input ia memiliki banyak tipe inputan seperti text, button, color, password, month, number, dan lain sebagainya


2. **Controlled compoonent** adalah elemen masukan form yang nilainya dikontrol oleh react melalui cara menggabungkan cara menyimpan dan memperbaharui state di HTML dan React dengan menggunakan state pada React. **UnControlled compoonent** adalah alternatif lain dari controlled component , dimana data form akan ditangani oleh DOM-nya sendiri dan kita tidak menggunakan event handler untuk pembaharuan state tetapi kita menggunakan ref untuk mendapatkan nilai pada form.

3. Alasan pentingnya validasi antara lain :
- Mencari input data yang benar dan sesuai format
- Melindungi akun pengguna
- Melindungi sistem/aplikasi

Tipe validasi data Formulir :
- **Client-side validation** adalah validasi yang dilakukan di sisi klien agar input sesuai dengan kebutuhan form. sebelum data form dikirimkan ke server.validasi ini ada 2 bagian yaitu Buil-in form validation, yaitu menggunakan fitur validasi langsung dari HTML5, dan menggunakan javascript.

-**Server-side validation** adalah validasi yang dilakukan di sisi user untuk memvalidasi data kembali sebelum disimpan di database. jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna

