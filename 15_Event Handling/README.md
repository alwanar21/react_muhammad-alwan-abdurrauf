## (15) Event Handling

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. State adalah data private pada sebuah component yang datanya hanya bisa diakses pada component tersebut dan tidak bisa diakses oleh component lain. state memiliki ciri sebagai berikut :
- Data yang bisa dimodifikasi menggunakan useState
- Setiap terjadi modifikasi akan terjadi render ulang
- Bersifat Asynchronus
- Dipakai dalam class

2. **Statefull component** adalah component yang dibuat menggunakan class dan juga memiliki state dengan kelebihan yaitu memiliki lifecycle. **stateless compenent** adalah component yang dibuat menggunakan function dan ia tidak mempunyai state tetapi hanya memiliki props.perbedaan antara statefull dan stateless component antara lain :
- Stateless component tidak mengetahui aplikasi sedangkan statefull component mengerti tentang aplikasi
- Stateless component dapat digunakan kembali sedangkan statefull component tidak dapat digunakan kembali
- Stateless component memliki tujuan utama berupa visualisasi sedangkan statefull component memliki tujuan utama berinteraksi dengan aplikasi.
- dan lain lain

3. **Handling event** adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu component. **Event** sendiri berarti suatu peristiwa yang dipicu oleh pengguna pada suatu component. beberapa contoh contoh event list antara lain :
- Clipboard events (promise terpenuhi)
- Form events (onChange, onSubmit)
- Mouse events (onClick, onDoubleClick, onMouseOver) 
- Generic events (onError, onLoad)

##