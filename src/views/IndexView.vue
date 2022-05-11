<template>
  <div class="home">
    <section class="header" id="home" style="background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(img/bg.png)">
      <nav id="nav">
        <a href="index.html"><img src="img/logo.png" /></a>
        <div class="nav-links" id="navLinks">
          <i class="fas fa-times" onclick="hideMenu()"></i>
          <ul>
            <li><a href="#home" class="navbar-section">Home</a></li>
            <li><a href="#konten" class="navbar-section">Konten</a></li>
            <li><a href="#layanan" class="navbar-section">Layanan</a></li>
            <li><a href="#tentangKami" class="navbar-section">Tentang Kami</a></li>
            <li><a href="#ourlocation" class="navbar-section">Our Location</a></li>
            <li><a href="#login" class="navbar-section">Login</a></li>
          </ul>
        </div>
        <i class="fas fa-bars" onclick="showMenu()"></i>
      </nav>

      <div class="text-box">
        <h1>Estadio Futsal</h1>

        <p>Tim EO dengan pengalaman lebih dari 22 Tahun dalam membantu anda menemukan konsep terbaik <br />untuk acara dengan layanan terbaik dan event lain yang tak terlupakan</p>
        <a href="" class="hero-btn">Selengkapnya</a>
      </div>
      <!--
    --></section>

    <!--konten-->
    <section class="konten" id="konten">
      <h1>Konten</h1>
      <p>Berikut adalah produk layanan terbaik kami</p>

      <div class="row1">
        <div class="konten-col">
          <h3>Webinar</h3>
          <p>
            Mengapa webinar dalam kurun waktu terakhir sangat diminati? Webinar merupakan salah satu sarana daring yang dapat menghubungkan orang, tim, dan organisai dari mana saja secara real-time. Webinar memungkinkan banyak orang untuk
            terlibat dalam diskusi atau pelatihan daring, dengan membagikan audio, dokumen atau presentasi.
          </p>
        </div>

        <div class="konten-col">
          <h3>Launching Product</h3>
          <p>Product Launching merupakan acara yang sangat penting bagi setiap bisnis baik publik maupun private. Kesuksesan acara mempengaruhi tingkat penjualan dan exposure dari produk yang akan dirilis.</p>
        </div>

        <div class="konten-col">
          <h3>Public Expose</h3>
          <p>
            Public Expose adalah acara yang diselenggarakan perusahaan terbuka atau publik dalam rangka pemaparan informasi internal perusahaan seperti kinerja hingga perubahan struktur. Biasanya Public Expose dilakukan juga ketika sebuah
            perusahaan melakukan Penawaran Umum Perdana Saham atau Go Public maupun Penawaran Umum Obligasi.
          </p>
        </div>
      </div>

      <div class="row2">
        <div class="konten-col">
          <h3>Investor Gathering</h3>
          <p>
            Investor Gathering adalah acara yang diselenggarakan oleh perusahaan terbuka atau publik dengan mengundang investor atau pemegang saham dan calon beserta stakeholder lainnya seperti analis dan media. Ini merupakan acara yang
            diperuntukkan untuk mempromosikan saham atau IPO (jika baru mau go public) dan sering dikaitkan sebagai acara penting dalam kesuksesan offering saham.
          </p>
        </div>

        <div class="konten-col">
          <h3>RUPS</h3>
          <p>
            RUPS (Rapat Umum Pemegang Saham) merupakan wadah para pemegang saham untuk mengambil keputusan penting yang berkaitan dengan modal yang ditanam dalam perusahaan, dengan memperhatikan ketentuan Anggaran Dasar dan peraturan
            perundang-undangan. Pengambilan keputusan dalam RUPS harus dilakukan secara wajar dan transparan dan didasarkan pada kepentingan usaha Perseroan dalam jangka panjang.
          </p>
        </div>
        <div class="konten-col">
          <h3>Company outing, gathering and anniversary</h3>
          <p>
            Selain menjadi EO jakarta untuk berbagai acara perusahaan yang formal, Kami juga dipercaya menjadi EO untuk acara outing dan gathering untuk perusahaan maupun employee. Kami ditunjuk untuk menghandle gathering untuk customer,
            investor hingga employee (karyawan), seperti Closing Dinner Rights Issue Bank BNI (Bali), Closing Dinner Obligasi Bank BJB (Jogja). Ratusan employee gathering dan company anniversary (ulang tahun perusahaan) telah kami tangani.
          </p>
        </div>
      </div>
    </section>
    <!--Akhir konten-->

    <!------- Layanan ------->
    <section id="layanan" class="layanan" style="background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(img/bg2.jpg)">
      <h1>Layanan</h1>
      <p>
        Kami dikenal sebagai EO Jakarta untuk Corporate di Jakarta Seiring pertumbuhan permintaan client, pada 2004 Kami memulai jasa EO jakarta untuk perusahaan publik dan corporate. Dengan jasa EO, nama Royal Promosindo semakin dikenal
        karena kualitas jasa yang diberikan tidak kalah dengan pemain lama. Lambat tahun, kini Royal Promosindo lebih dikenal sebagai penyedia jasa EO jakarta dibandingkan jasa periklanan yang dahulu merupakan core business kami.
      </p>

      <!-- Slideshow container -->
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="img/presentation.jpeg" style="width: 100%" />
          <div class="text">Seminar</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="img/wedding.jpg" style="width: 100%" />
          <div class="text">Wedding</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="img/gathering.jpg" style="width: 100%" />
          <div class="text">Gathering</div>
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
      <br />

      <!-- The dots/circles -->
      <div style="text-align: center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
    </section>
    <!------- Akhir Layanan ------->

    <!--Tentang Kami-->
    <section id="tentangKami" class="tentangkami">
      <div class="about-section">
        <h1>Tentang Kami</h1>
        <p>
          Pada awalnya kami terkenal dengan Advertising company, setelah mengembangkan diri dibidang printing kami terkenal dengan sebutan printing company, dan setelah kami mengembangkan diri di bidang Event Organizer kami terkenal dengan
          EO. Hal ini menandakan bahwa kami serius dan mempunyai komitmen dalam menjaga kualitas dan pelayanan demi kepuasan pelanggan.
        </p>
        <p>
          Sejak awal berdirinya, royal promosindo memposisikan diri pada segmen pasar perusahaan publik, segmen pasar ini merupakan wilayah yang sangat potensial dan dinamis dengan terus meningkatnya jumlah perusahaan yang go public. Hingga
          saat ini, royal promosindo telah menangani lebih dari 100 perusahaan, dan 95% diantaranya adalah perusahaan publik..
        </p>

        <br />
        <h2>Kenapa kerja sama Royal Promosindo aja?</h2>
        <p>
          Pada awalnya kami terkenal dengan Advertising company, setelah mengembangkan diri dibidang printing kami terkenal dengan sebutan printing company, dan setelah kami mengembangkan diri di bidang Event Organizer kami terkenal dengan
          EO. Hal ini menandakan bahwa kami serius dan mempunyai komitmen dalam menjaga kualitas dan pelayanan demi kepuasan pelanggan.
        </p>
        <br />
        <p>
          • Keunggulan kami dibidang Event Organizer adalah ditandai dengan banyaknya perusahaan swasta nasional maupun Badan Usaha Milik Negara (BUMN) telah mempercayakan kegiatan Event Organizer kepada kami baik untuk acara Ulang Tahun
          Perusahaan, Launching Product, Public Expose, Investor Gathering, RUPS, CSR, Rakernas, Seminar, Outing maupun City Tour.
        </p>
      </div>

      <h2 style="text-align: center">Sejarah Kami</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="img/advertising.png" alt="Jane" style="width: 100%" />
            <div class="container">
              <h2>1999</h2>
              <p class="title">Advertising</p>
              <p>berdiri dengan meyediakan Jasa Advertising</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="img/printing.jpg" alt="Mike" style="width: 100%" />
            <div class="container">
              <h2>2002</h2>
              <p class="title">Printing</p>
              <p>Mengembangkan usaha di bidang Printing</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="img/event organizer.jpg" alt="John" style="width: 100%" />
            <div class="container">
              <h2>2004</h2>
              <p class="title">Event Organizer</p>
              <p>Menyediakan Jasa Event Organizer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Akhir Tentang Kami-->

    <!-- Our Location-->
    <section id="ourlocation" class="ourlocation" style="background-color: #93caed">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#acd1af"
          fill-opacity="1"
          d="M0,224L40,234.7C80,245,160,267,240,261.3C320,256,400,224,480,202.7C560,181,640,171,720,181.3C800,192,880,224,960,250.7C1040,277,1120,299,1200,309.3C1280,320,1360,320,1400,320L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <h1 style="text-align: center">Our Location</h1>

      <div class="rowMap">
        <div class="kolom">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Politeknik%20Negeri%20Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe
              ><a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">FNF Mods</a>
            </div>
          </div>
        </div>

        <div class="kolom">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/4eJ8sJGh5dA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <!--Akhir Our Location-->

    <div class="footer" id="login">
      <div class="footer-content">
        <div class="footer-section address">
          <p>Jl. Tebet Barat Dalam I C No.43, Tebet, Jakarta Selatan, DKI Jakarta 10033</p>
          <div class="contact">
            <span><i class="fas fa-mobile-alt"></i>&nbsp; (021) 99991231</span>
            <span><i class="fas fa-envelope-open-text"></i>&nbsp; Info@royalpromosindo.co.id</span>
          </div>
          <div class="socials">
            <a href=""><i class="fab fa-facebook" style="color: white"></i></a>
            <a href=""><i class="fab fa-instagram" style="color: purple"></i></a>
            <a href=""><i class="fab fa-youtube" style="color: red"></i></a>
          </div>
        </div>
        <div class="footer-section contact-form">
          <h2>Login</h2>
          <br />
          <form name="form1" onsubmit="return validate();">
            <input class="text-input contact-input" type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" class="text-input contact-input" placeholder="E-mail" required />
            <button class="btn" type="submit" name="submit">Submit</button>
          </form>
        </div>
      </div>

      <div class="footer-bottom">&copy; royalpromosindo.co.id | Designed by Andhika Cahyadi</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "IndexView",
};
</script>
<style>
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 369px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 369px;
}
.gmap_iframe {
  height: 369px !important;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Karla", sans-serif;
  box-sizing: border-box;
}

.header {
  min-height: 100vh;
  width: 100%;

  background-position: center;
  background-size: cover;
  position: relative;
}

nav {
  display: flex;
  padding: 0% 6%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  box-sizing: border-box;
  z-index: 5;
  width: 100%;
  transition: 0.8s;
}
nav.navy {
  background-color: #000080;
  padding: 0%, 4%;
}

nav img {
  width: 80px;
  transition: 0.8s;
}
nav .fas {
  display: none;
}
.nav-links {
  flex: 1;
  text-align: right;
}
.nav-links ul li {
  list-style: none;
  display: inline-block;
  padding: 8px 12px;
  position: relative;
}
.nav-links ul li a {
  color: #fbfaf5;
  text-decoration: none;
  font-size: 18px;
}
.nav-links ul li::after {
  content: "";
  width: 0%;
  height: 2px;
  background: #ffbe61;
  display: block;
  margin: auto;
  transition: 0.8s;
}
.nav-links ul li:hover::after {
  width: 100%;
}

.text-box {
  width: 90%;
  color: #fbfaf5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.text-box h1 {
  font-size: 65px;
}
.text-box p {
  margin: 10px 0 40px;
  font-size: 16px;
  color: #fbfaf5;
}
.hero-btn {
  display: inline-block;
  text-decoration: none;
  color: #fbfaf5;
  border: 1px solid #fbfaf5;
  padding: 15px 40px;
  font-size: 16px;
  background: transparent;
  position: relative;
  cursor: pointer;
}
.hero-btn:hover {
  background: #ffbe61;
  transition: 1.2s;
  color: #0e1111;
}

/*Konten*/
.konten {
  width: 100%;
  margin: auto;
  text-align: center;
  padding-top: 75px;
  background: #fbfaf5;
  transition: 2s;
}

.row1 {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}
.row2 {
  display: flex;
  justify-content: space-between;
}

.konten-col {
  flex-basis: 31%;
  background: #93caed;
  border-radius: 10px;
  margin-bottom: 5%;
  padding: 20px 12px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-right: 20px;
  transition: 0.5s;
}
h1 {
  font-size: 50px;
  font-weight: 600;
}
h3 {
  text-align: center;
  margin: 10px 0;
  font-size: 30px;
  font-weight: 600;
}
.konten-col:hover {
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 2);
}
.konten p {
  font-size: 24px;
}
.konten-col p {
  color: #0e1111;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  padding: 10px;
}

/* Layanan */
.layanan {
  padding-top: 75px;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}
.layanan h1 {
  color: #fbfaf5;
}
.layanan p {
  margin-top: 5%;
  color: #fbfaf5;
  margin: 40px;
  font-size: 23px;
  font-weight: 500;
}
/* Tentang Kami */

.tentangkami {
  padding-top: 270px;
  background-color: #acd1af;
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
.row {
  display: flex;
}
.column {
  width: 30%;
  margin-bottom: 16px;
  padding: 0 8px;
  flex-basis: 31%;
  box-sizing: border-box;
  margin-left: 20px;
  border-radius: 2px;
}
h2 {
  font-size: 36px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  border-radius: 6px;
  background-color: #fbfaf5;
  transition: 0.5s;
}
.card:hover {
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 6);
  cursor: pointer;
}
.card img {
  padding-top: 5px;
  border-radius: 4px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #ffbe61;
  color: #0e1111;
}
.about-section p {
  font-size: 18px;
}

.container {
  padding: 0 16px;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
.rowMap {
  width: 100%;
  display: flex;
  border: 1px red;
}
.kolom {
  padding: 3%;
  float: left;
  border: 1px solid #93caed;
  width: 50%;
}

/* Slideshow/
/* Slideshow container */
.slideshow-container {
  max-width: 800px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: #b95d8d;
}

/* Caption text */
.text {
  color: #acd1af;
  font-size: 20px;
  padding: 8px 0px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  font-weight: 600;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #b95d8d;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
/*button up*/

#button-up {
  display: inline-block;
  background-color: #b95d8d;
  width: 50px;
  height: 50px;
  line-height: 60px;
  text-align: center;
  border-radius: 16px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.5s;
  opacity: 0.5s, visibility 0.5s;
  opacity: 0;
  z-index: 1000;
  transition: 0.8s;
}
#button-up i {
  font-size: 32px;
  color: #fbfaf5;
}

#button-up:hover {
  cursor: pointer;
  background-color: #acd1af;
}
#button-up.show {
  opacity: 1;
}
@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/**Footer */
.btn {
  padding: 0.5rem 1rem;
  background: #000080;
  color: #fbfaf5;
  border: 1px solid #fbfaf5;
  border-radius: 0.25rem;
}
.footer {
  background: #000080;
  color: #fbfaf5;
  height: 300px;
  position: relative;
}

.footer .footer-content {
  border: 5px solid #0e1111;
  height: 250px;
  display: flex;
}
.footer .footer-content h1,
.footer .footer-content h2 {
  color: #fbfaf5;
}
.footer .footer-content .address h1 span {
  color: #160e7f;
}
.footer .footer-content .address p {
  font-size: 20px;
}
.footer .footer-content .address .contact span {
  display: block;
  font-size: 1.1em;
  margin-bottom: 8px;
}
.footer .footer-content .address .socials a {
  border: 1px solid #fbfaf5;
  width: 45px;
  height: 41px;
  padding-top: 5px;
  text-align: center;
  display: inline-block;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 1.3em;
}
.footer .footer-content .address .socials a:hover {
  border: 2px solid #e0e0e0;
  transition: all 1s;
  color: #fbfaf5;
}
.footer .footer-content .footer-section {
  padding: 40px;
}
.footer .footer-bottom {
  background: black;
  color: #fbfaf5;
  position: absolute;
  height: 50px;
  width: 100%;
  text-align: center;
  bottom: 0px;
  left: 0px;
  padding-top: 20px;
}
.footer .footer-content .contact-form {
  padding-top: 2%;
}
.footer .footer-content .contact-form .contact-input {
  background: #fbfaf5;
  color: #0e1111;
  margin-bottom: 10px;
  line-height: 1.5rem;
  padding: 0.7rem 1.2rem;

  font-size: 14px;
  border: none;
  width: 60%;
  position: relative;
  margin-right: 20px;
  margin-left: 145px;
}
.footer .footer-content .contact-form h2 {
  margin-left: 40%;
  margin-right: 25%;
}
.footer .footer-content .contact-form button {
  margin-left: 42%;
}
.footer .footer-content .contact-form button:hover {
  background: #0e1111;
  border: 2px solid #93caed;
  transition: 1.5s;
  cursor: pointer;
}
/* Akhir Footer*/

@media (max-width: 750px) {
  html,
  body {
    overflow-x: hidden;
  }
  .text-box h1 {
    font-size: 35px;
  }

  .nav-links ul li {
    display: block;
    font-size: 32px;
  }
  .nav-links {
    background: #93caed;
    position: absolute;
    height: 100vh;
    width: 200px;
    top: 0;
    right: -200px;
    text-align: left;
    z-index: 5;
    transition: 1.2s;
  }
  nav .fas {
    display: block;
    color: #fbfaf5;
    margin: 10px;
    cursor: pointer;
    font-size: 30px;
  }
  .nav-links ul {
    padding: 25px;
  }
  .row1 {
    flex-direction: column;
  }
  .row2 {
    flex-direction: column;
  }
  .row {
    flex-direction: column;
    margin-right: 20px;
  }
  .rowMap {
    flex-direction: column;
    padding: 0;
  }
  .kolom {
    padding-bottom: 3%;
    width: 100%;
  }
  .column {
    width: 100%;
    display: block;
  }
  .layanan p {
    font-size: 18px;
  }
}
</style>
