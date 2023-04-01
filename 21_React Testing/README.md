## (21) React Testing

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. **Testing** adalah proses  memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi.manfaat testing antara lain :
- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

Testing dikategorikan dalam pada hal berikut :
- Rendering component trees
- Menjalankan aplikasi lengkap

hal yang perlu dipertimbangkan dalam memilih tools untuk testing antara lain :
- kecepatan iterasi vs environment yang realistis
- seberapa banyak mock

beberapa tools yang direkomendasikan untuk testing antara lain jest dan React Testing Library

2. React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render. didalamnya ada **render RTL** yang berguna untuk merender file jsx apa pun yang dibutuhkan.Setelah itu kita memiliki akses ke component yang akan kita test menggunakan **Debug RTL**.

ada beberapa kategori testing antara lain :
- LabelText
- PlaceholderText
- AltTex
- DisplayValue

ada juga handle asynchronus disini untuk mengetes fetch sebuah API. dengan cara membuat mock untuk axios(atau yang lain).Selanjutnya kita perlu membuat mock untur promise hasilnya ketika resolve atau reject. Ini dikembalikan lagi kepada skenario kita.

3.**React Hooks Testing Library** digunakan Untuk mengetes custom hook  karena ia menyediakan alat-alat untuk mengetes hooks tanpa merender satu komponen. penginstalan dengan cara menulis code berikut :

```
npm install -D @testing-library/react-hooks

```