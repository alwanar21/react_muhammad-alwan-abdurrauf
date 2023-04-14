
## (29) Deployment

Beberapa poin yang saya dapat pada materi ini antara lain : 

##

1.Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi.Namun,pesan-pesan ini membuat React menjadi lebih besar dan lambat. oleh karena itu kita harus membuild aplikasi agar menjadi versi production sehingga performanya lebih ringan dan cepat.

Karena proyek menggunakan CRA. maka kita membuild aplikasi kita dengan perintah berikut :

```
npm run build

```
dan untuk menjalankan aplikasi yang optimal di lokal komputer kita, kita bisa menggunakan serve

```
//install serve
npm install -g serve

//menjalankan serve di lokal
serve -s build
```


2. Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya kita sendiri.

3. Pada kali ini, deployment menggunakan 2 teknologi berbeda yaitu surge dan netlify :

    1.  Surge adalah layanan penerbit website static(Static Web Publishing) gratis untuk Front-End Developers. Website static yang menggunakan surge akan memiliki subdomain. *.surge.sh. Surge dapat menerima file HTML, CSS,, dan Javascript.

berikut vara mendeploy dengan Surge:
- Pastikan menggunakan node versi terbaru
- Install surge di terminal 
```
npm install surge
```
- Jalankan perintah surge di terminal
- Terkadang kita tidak ingin mempulikasikan sebagian domain atau subdomain. untuk itu kita bisa teardown sebuah project melalui surge CLI. ini efektif membuat projek kita offline 


    2. Netlify adalah suatu platform penyedia layanan builds tools sekaligus Continous Deployment.Netlify memengkinkan kitauntuk mempublish website statis secara gratis.Netlify juga sudah terintegrasi dengan git Host populer seperti Github, Gitlab dan Bitbucket.

berikut vara mendeploy dengan Netlify :
- Buat akun netlify
- Install Netlify CLI di terminal

```
npm install netlify-CLI
```
- Jalankan perintah netlify deploy di terminal
- Verify akun melalui browser, pilih Authorize
- Pilih "Create & Cinfigure a new site"
- pilih lokasi file yang akan di deploy.pilih /build