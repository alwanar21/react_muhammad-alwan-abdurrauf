
## (11) Introduction Data Structures (javascript)

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. Pembelajaran Data Structures pada bahasa pemograman Javasript ini memiliki banyak manfaat, antara lain kita mengetahui kualitas kode yang kita tulis juga mengefesiensi kode yang kita miliki sehingga maintenance dan juga pengembangan kode kedepannya dapat dilakukan dengan mudah oleh diri sendiri maupun tim.

2. **Data** merujuk pada semua tipe informasi yang tersimpan di dalam memori komputer. sedangkan **Data Structure** adalah cara menyimpan atau mengorganisir data/value/elemen di dalam memori komputer. Operasi data structure ada 4 yaitu : Read, Delete, Insert, dan Search. Kecepatan operasi data ukur dengan banyak langkah atau steps yang diperlukan dan ukuran kecepatan ini tidak diukur melalui waktu karena waktu pada operasi dapat berjalan dinamis tergantung environment itu bekerja dan ada.




3. Basic Data structures ada 2 yaitu **Array** dan juga **Set**


#### A. Array
Array merupakan sebuah data structure yang paling dasar yang memiliki banyak kegunaan. bisa diinisiasi dengan kurung siku sebagai berikut :

```
let data = [1, 2, 3, 4];

```
data dalam array ditandai dengan sebuah indeks yang defaultnya diawali dari 0. indeks ini berguna untuk engidentifikasi dimana posisi elemen berada.

Operasi pada Array dapat dilakukan secara berikut :
- **Reading** : melihat nilai apa yang terkandung pada indeks tertetu di dalam Array dan hanya memerlukan satu step saja.
- **Searching** : mencari nilai tertentu ada pada array atau tidak dan tidak memiliki cara untuk bisa melompat langsung ke nilai tertentu(memeriksa satu-persatu cell) dengan function indexOf()
- **Insertion** : memasukkan value kedalam Array. banyak step tergantung dimana value akan dimasukkan. memasukkan vale pada akhir array hanya memerlukan satu step, dan memasukkan value pada awal atau tengan array akan menambah step untuk menggeser value sebelumnya.
- **Deletion** : Menghilangkan value pada index tertentu dan membutuhkan N step untuk array yang memiliki jumlah N data. bisa memakai function pop(), value(), length(), splice() dan lain sebagainya, tergantung data mana dan banyak data yang akan dihapus.


#### B. Set
Set merupakan data structure sama seperti array akan tetapai ia tidak mengizinkan duplikat value dimasukkan didalamnya. untuk keempat operasinya sama seperti array akan tetapi ada perbedaan efisiensi pada operasi insertion.

adapun function untuk melakukan keempat operasi adalah sepakai berikut :
- **Reading** : menggunakan forEach().
- **Searching** : menggunakan has method
- **Insertion** : karena pada set tidak diizinkan adanya duplikasi ,maka ada step tambahan berupa operasi searching terlebih dahulu, jika tidak ada duplikasi maka value baru akan bisa dimasukkan.
- **Deletion** : menggunakan delete()

Menganalisa jumlah step sangat penting untuk mengukur performa dari sebuah data structure pada sebuah aplikasi

##

