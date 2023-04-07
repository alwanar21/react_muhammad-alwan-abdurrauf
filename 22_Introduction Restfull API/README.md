## (22) Introduction Restfull API

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. **API(Application Programming Interface)** adalah satu set fungsi dan prosedur yang memungkinkan penciptaan aplikasi yang mengakses fitur atau data suatu sistem operasi, aplikasi, atau layanan lainnya. API bekerja dengan cara Client mengirim request ke server, lalu server mengembalikan response berupa req yang diminta.


REST kepanajangan dari REpresentational State Transfer. menggunakan HTTP protocol dengan beberapa Request dan Response format yaitu :
- JSON
- XML
- SOAP

HTTP request Method :
- GET
- POST
- PUT
- DELETE
- HEAD
- OPTION
- PATCH


2. JSON(Javascript Object Notation) adalah salah satu format untuk menyimpan dan mentransfer data yang memiliki struktur seperti object yang memiliki key dan value. Value pada JSON antara lain :
- String
- Object
- Array
- Boolean
- Number
- Null

HTTP response code adalah kode response standar yang diberikan oleh server website di internet. yang membantu untuk mengidentifikasi penyebab masalah saat laman website tidak dimuat dengan benar. ada beberapa code yang sering kita temui dan gunakan, antara lain :
- 500 : Internal server error
- 200 : OK
- 201 : Created
- 400 : Bad request
- 404 : Not Found
- 401 : Unauthorized
- 405 : Method not allowed


3. REST API Design Best Practice :
- menggunakan kata benda daripada kata kerja
- penamaan menggunakan nama jamak
- menggunakan resources nesting saat menunjukkan sebuah relasi atau hirarki
- menggunakan format response JSON
- dan lain sebagainya