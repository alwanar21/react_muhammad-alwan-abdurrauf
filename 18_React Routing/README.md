## (18) React Routing

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. **Router** merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(Single page application). ada 2 jenis page dalam aplication yaitu :
- **Multi page application** disebut juga dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setip kali membuat permintaan baru.
- **Single page application** adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.
&nbsp;
Salah satu library untuk routing pada react adalah  **React Router** dengan menjalankan syntax berikut pada terminal

```

npm install react-router-dom --save

```

beberapa component pada react router antara lain BrowserRouter, Switch, Route, Link dan masih banyak lagi.

beberapa hooks yang ada pada react antara lain : useState useEffect,useContext, useReducer, useRef, dll 



2. **Parameter URL** adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

3. Berikut ini beberapa hook-hook pada routing react , antara lain :
- **useHistory** memberi kita akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi
- **useParams** mengembalikan objek pasangan kunci/nilai parameter URL. digunakan untuk mengakses match.params dari <Route> saat ini
- **useRouteMatch** digunakan untuk mencocokkan URL saat ini dengan cara yang sama seperti <Route>. berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Router>
- **useLocation**