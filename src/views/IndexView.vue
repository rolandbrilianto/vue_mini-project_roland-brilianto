<template>
  <div>
    <section ref="home" class="header" id="home" style="background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(https://res.cloudinary.com/dniuy65ic/image/upload/v1652381773/bgFutsal_wrojpi.jpg)">
      <nav id="nav" class="navy">
        <a href="index.html"><img src="img/logo.png" /></a>
        <div class="nav-links mt-2" v-bind:style="{ right: computedRight }">
          <i class="fas fa-times" @click="closeMenu()"></i>
          <ul>
            <li><a @click="goto('home')" class="navbar-section" style="cursor: pointer">Home</a></li>
            <li><a @click="goto('tentang-kami')" class="navbar-section" style="cursor: pointer">Tentang Kami</a></li>
            <li><a @click="goto('fasilitas')" class="navbar-section" style="cursor: pointer">Fasilitas Kami</a></li>
            <li><a @click="goto('ourlocation')" style="cursor: pointer" class="navbar-section">Our Location</a></li>
            <li><a class="navbar-section" style="cursor: pointer">Login</a></li>
          </ul>
        </div>
        <i class="fas fa-bars" @click="showMenu()"></i>
      </nav>

      <div class="text-box">
        <h1>Estadio Futsal</h1>

        <p>Jln Perjuangan No 66, Bekasi Utara 17142 <br />0877 2121 0909</p>
        <a href="" class="hero-btn">Selengkapnya</a>
      </div>
      <!--
    --></section>

    <!--Tentang Kami-->
    <section id="tentangKami" class="tentangkami" ref="tentang-kami">
      <div class="about-section">
        <h1>Tentang Kami</h1>
        <p>
          ESTADIO FUTSAL dibangun oleh para penggila futsal yang ingin memberikan kenikmatan dan kepuasan permainan kepada para pencinta futsal di kota Bekasi dan sekitar nya. Konsep eco-friendly dan ramah lingkungan telah menjadikan
          Estadio Futsal sebagai tempat bermain futsal yang sangat mendukung dan baik.
        </p>
        <p>
          Kami menyediakan 2 lapangan dengan standard international berlapiskan interlock-vinyl dan memiliki ukuran minimal standard international, akan memberikan kenikmatan dan kenyamanan permainan kepada para pencinta futsal. Selain itu
          dengan ada nya jembatan tribun penonton di lantai-2, diharapkan akan memberikan atmosfere yang berbeda baik kepada para pemain maupun para penonton pertandingan.
        </p>

        <p>
          Selain standard lapangan yang sangat baik, Fasilitas pendukung yang baik juga menjadikan Estadio Futsal sebagai sarana olahraga yang sangat nyaman. Ruang ganti dan kamar mandi yang sangat bersih menjadi komitmen yang diberikan
          oleh pihak Estadio Futsal.
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#93caed"
          fill-opacity="1"
          d="M0,224L40,234.7C80,245,160,267,240,261.3C320,256,400,224,480,202.7C560,181,640,171,720,181.3C800,192,880,224,960,250.7C1040,277,1120,299,1200,309.3C1280,320,1360,320,1400,320L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </section>
    <section ref="fasilitas">
      <h1>Fasilitas Kami</h1>
      <ApolloQuery
        :query="
          (gql) => gql`
            query MyQuery {
              fasilitas {
                judul
                judul_second
                deskripsi
                foto
              }
            }
          `
        "
      >
        <template v-slot="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occurred</div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">
            <div class="row">
              <div class="column" v-for="Fasilitas in data.fasilitas" :key="Fasilitas.id">
                <div class="card">
                  <img :src="Fasilitas.foto" alt="Mike" style="width: 100%" />
                  <div class="container">
                    <h2>{{ Fasilitas.judul }}</h2>
                    <p class="title">{{ Fasilitas.judul_second }}</p>
                    <p>{{ Fasilitas.deskripsi }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </ApolloQuery>
    </section>

    <!--Akhir Tentang Kami-->

    <!-- Our Location-->
    <div ref="ourlocation">
      <section id="ourlocation" class="ourlocation" style="background-color: #93caed">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,224L40,234.7C80,245,160,267,240,261.3C320,256,400,224,480,202.7C560,181,640,171,720,181.3C800,192,880,224,960,250.7C1040,277,1120,299,1200,309.3C1280,320,1360,320,1400,320L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <h1 style="text-align: center">Our Location</h1>

        <div class="rowMap">
          <div class="kolom">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=estadio%20futsal&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe
                ><a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">FNF Mods</a>
              </div>
            </div>
          </div>

          <div class="kolom">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rmJMKYE9RwI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#93caed"
          fill-opacity="1"
          d="M0,224L40,234.7C80,245,160,267,240,261.3C320,256,400,224,480,202.7C560,181,640,171,720,181.3C800,192,880,224,960,250.7C1040,277,1120,299,1200,309.3C1280,320,1360,320,1400,320L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div>
        <h1>Booking</h1>
        <ApolloQuery
          :query="
            (gql) => gql`
              query MyQuery2 {
                booking {
                  id
                  Name
                  Telephone
                  Lapangan
                  Tanggal
                  Waktu
                  Keterangan
                }
              }
            `
          "
        >
          <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred{{ error }}</div>

            <!-- Result -->
            <div v-else-if="data" class="result apollo">
              <div class="table-responsive">
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama</th>
                      <th scope="col">No Telp</th>
                      <th scope="col">Lapangan</th>
                      <th scope="col">Tanggal</th>
                      <th scope="col">Pukul</th>
                      <th scope="col">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="Booking in data.booking" :key="Booking.id">
                      <td>{{ Booking.id }}</td>
                      <td>{{ Booking.Name }}</td>
                      <td>{{ Booking.Telephone }}</td>
                      <td>{{ Booking.Lapangan }}</td>
                      <td>{{ Booking.Tanggal }}</td>
                      <td>{{ Booking.Waktu }}</td>
                      <td>{{ Booking.Keterangan }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-5">
                      <div class="card bg-primary shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header"><h3 class="text-center text-light font-weight-light my-4">Booking</h3></div>
                        <div class="card-body">
                          <form>
                            <div class="form-floating mb-3">
                              <input class="form-control" v-model="name" id="inputName" type="text" placeholder="Roland Brilianto" required />
                              <label for="inputName">Nama</label>
                            </div>
                            <div class="form-floating mb-3">
                              <input class="form-control" v-model="telNo" id="inputTelp" type="text" placeholder="Telepon" required />
                              <label for="inputTelp">Telepon</label>
                            </div>
                            <div class="form-floating mb-3">
                              <input class="form-control" v-model="tanggal" id="date" type="date" placeholder="Tanggal" required />
                              <label for="inputDate">Tanggal</label>
                            </div>
                            <div class="form-floating mb-3">
                              <select class="form-select" v-model="lapangan" aria-label="Default select example" required>
                                <option value="Lapangan 1">Lapangan 1</option>
                                <option value="Lapangan 2">Lapangan 2</option>
                              </select>

                              <label for="inputDate">Lapangan</label>
                            </div>
                            <div class="form-floating mb-3">
                              <select class="form-select" v-model="waktu" aria-label="Default select example" required>
                                <option value="16.00 - 17.00">16.00 - 17.00</option>
                                <option value="17.00 - 18.00">17.00 - 18.00</option>
                                <option value="18.00 - 19.00">18.00 - 19.00</option>
                                <option value="19.00 - 20.00">19.00 - 20.00</option>
                                <option value="20.00 - 21.00">20.00 - 21.00</option>
                                <option value="21.00 - 22.00">21.00 - 22.00</option>
                                <option value="22.00 - 23.00">22.00 - 23.00</option>
                                <option value="23.00 - 24.00">23.00 - 24.00</option>
                              </select>

                              <label for="inputDate">Pukul</label>
                            </div>
                            <div class="form-floating mb-3">
                              <select class="form-select" v-model="keterangan" aria-label="Default select example" required>
                                <option value="Langsung Bayar">Langsung Bayar</option>
                                <option value="Bayar Nanti">Bayar Nanti</option>
                              </select>

                              <label for="inputDate">Bayar</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                              <a class="btn btn-success" @click="book(data.booking)">Book Now</a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- No result -->
            <div v-else class="no-result apollo">No result :(</div>
          </template>
          <ApolloSubscribeToMore
            :document="
              (gql) => gql`
                subscription MySubscription {
                  booking {
                    id
                    Name
                    Tanggal
                    Lapangan
                    Telephone
                    Waktu
                    Keterangan
                  }
                }
              `
            "
            :updateQuery="updated"
          />
        </ApolloQuery>
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

      <div class="footer-bottom">&copy; royalpromosindo.co.id | Designed by Roland Brilianto</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import gql from "graphql-tag";
export default {
  name: "IndexView",
  data() {
    return {
      right: "-200px",
      name: "",
      telNo: "",
      tanggal: null,
      keterangan: null,
      waktu: null,
      lapangan: null,
    };
  },
  computed: {
    computedRight: function () {
      return this.right;
    },
  },
  methods: {
    updated(previousResult, { subscriptionData }) {
      return {
        booking: subscriptionData.data.booking,
      };
    },
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    showMenu() {
      this.right = 0;
    },
    closeMenu() {
      this.right = "-200px";
    },
    book(booking) {
      if (this.name == "" || this.telNo == "" || this.tanggal == "" || this.waktu == "" || this.lapangan == "" || this.keterangan == "") {
        alert("isi data lengkap");
      } else {
        let i;
        let flag = 0;
        for (i = 0; i < booking.length; i++) {
          if (this.tanggal == booking[i].Tanggal && this.waktu == booking[i].Waktu && this.lapangan == booking[i].Lapangan) {
            flag = flag + 1;
          }
        }
        if (flag > 0) {
          alert("Booking GAGAL! silahkan booking di jadwal yang belom ter booking, silahkan liat tabel");
        } else {
          console.log("data masuk");
          this.$apollo.mutate({
            mutation: gql`
              mutation MyMutation($Keterangan: String!, $Lapangan: String!, $Name: String!, $Tanggal: date!, $Telephone: String!, $Waktu: String!) {
                insert_booking_one(object: { Name: $Name, Telephone: $Telephone, Tanggal: $Tanggal, Lapangan: $Lapangan, Waktu: $Waktu, Keterangan: $Keterangan }) {
                  Name
                  Telephone
                  Tanggal
                  Lapangan
                  Waktu
                  Keterangan
                }
              }
            `,
            variables: {
              Name: this.name,
              Telephone: this.telNo,
              Tanggal: this.tanggal,
              Lapangan: this.lapangan,
              Waktu: this.waktu,
              Keterangan: this.keterangan,
            },
          });
          alert("booking success");
          location.reload();
        }
      }
    },
  },
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
  background-color: #1266f1;
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

/* Tentang Kami */

.tentangkami {
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
  background-color: #93caed;
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
  background-color: #1266f1;
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
  background: #0e1111;
  border: 2px solid #93caed;
  cursor: pointer;
  color: white;
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
  background: #0e1111;
  border: 2px solid #93caed;
  cursor: pointer;
  color: white;
  margin-left: 10%;
}
.footer .footer-content .contact-form button:hover {
  background: #0e1111;
  border: 2px solid #93caed;
  transition: 1.5s;
  cursor: pointer;
  color: white;
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
