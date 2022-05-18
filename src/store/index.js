import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listParaph: [
      {
        text: "ESTADIO FUTSAL dibangun oleh para penggila futsal yang ingin memberikan kenikmatan dan kepuasan permainan kepada para pencinta futsal di kota Bekasi dan sekitar nya. Konsep eco-friendly dan ramah lingkungan telah menjadikan Estadio Futsal sebagai tempat bermain futsal yang sangat mendukung dan baik.",
      },
      {
        text: "Kami menyediakan 2 lapangan dengan standard international berlapiskan interlock-vinyl dan memiliki ukuran minimal standard international, akan memberikan kenikmatan dan kenyamanan permainan kepada para pencinta futsal. Selain itu dengan ada nya jembatan tribun penonton di lantai-2, diharapkan akan memberikan atmosfere yang berbeda baik kepada para pemain maupun para penonton pertandingan.",
      },
      {
        text: "Selain standard lapangan yang sangat baik, Fasilitas pendukung yang baik juga menjadikan Estadio Futsal sebagai sarana olahraga yang sangat nyaman. Ruang ganti dan kamar mandi yang sangat bersih menjadi komitmen yang diberikan oleh pihak Estadio Futsal.",
      },
    ],
  },
});
