
## (25) Authentication in React

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. Authorization merupakan Fungsi menentukan hak akses/privileges ke resources tertentu, yang terkait dengan keamanan informasi umum dan keamanan komputer, dan kontrol akses pada khususnya(routing). Secara lebih formal, "mengotorisasi" berarti mendefinisikan kebijakan akses



2. Secara umum , authorization bekrja sebagai berikut :
- pada fase User Registration : front end akan mengirimkan data yang telah user submit pada saat registrasi user, baik itu berupa username, email, dan lain sebagainya ke backend. kemudian backend ini akan memeriksa apakah data ini sudah ada atau belum sebelumnya. jika ada maka ia akan meresponse ke front end sebuah message bahwa registrasi telah berhasil.
- pada fase login user baik itu berupa username, password, dan lain sebagainya ke backend, kemudian backend akan mengauthenticate adanya user tersebut atau tidak , jika ada ia akan membuatkan JWT untuk user tersebut lalu mengembalikan JWT response ke front end berupa token,type, user info, dan lain sebagainya.
- untuk mengakses resource yang sesuai maka saat meruqest data akan diikutkan data dan JWT pada header request ke backend. kemudian backend akan mengecek JWT untuk mendapatkan user info dan authrnticate kepemilikan user lalu mengembalikan response ke front end berdasarkan Authorisasinya tadi.


3. Pada keamanan komputer, logging(login) merupakan proses untuk memberikan seorang individu sebuah akses ke sistem komputer dengan cara mengedintifikasi dan mengenali siapa user ini. dengan cara memasukkan username dan password. pada username ini dapat berupa email, nomor telepon dan juga informasi private lainnya.