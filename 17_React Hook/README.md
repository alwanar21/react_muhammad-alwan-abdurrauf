## (17) React Hooks

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1. **Hooks** adalah fitur terbaru pada react 16.8 yang berguna agar kita dapat menggunakan state dan fitur React yang lain tanpa menulis sebuah class.penggunaan hooks ini dikarenakan adanya kesulitan untuk menggunakan kembali stateful logic antar compenent, compenent yang kompleks sehingga sulit dimengerti, dn juga karena class itu membingungkan manusia dan mesin.
&nbsp;

beberapa hooks yang ada pada react antara lain : useState useEffect,useContext, useReducer, useRef, dll 



2. **useState** adalah hooks yang digunakan untuk menyimpan nilai pada component yang nantinya niainya bisa kita update sesuai kebutuhan.contohnya sebagai berikut :
```
const [name, setName] = useState("")

```
contoh diatas adalah contoh deklarasi useState yang kita beri value string kosong(bisa diisi jenis data apapun), kita bisa mengakses data yang ada didalamnya menggunakan keyword **name** dan kita bisa merubah valuenya dengan keyword **setName**
&nbsp;

**useEffect** adalah hooks yang memungkinkan kita untuk melakukan side efect pada function component. ada dua jenis useEffect yaitu dengan cleanUp dan tanpa cleanUp. berikut cara mendeklarasikan useEffect :

```
useEffect(() => {
    
},[])

```

3. **Custom Hooks** adalah cara yang disediakan sehingga memungkinkan kita untuk mengestrak component logika ke fungsi yang dapat digunakan kembali
##