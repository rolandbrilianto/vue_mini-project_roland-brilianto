<template>
  <div class="dashboard">
    <NavigationBar />

    <div class="container-fluid">
      <div class="row">
        <SideBar />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Table Booking List</h1>
          </div>
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
              <div v-else-if="error" class="error apollo">An error occurred</div>

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

                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="book in data.booking" :key="book.id">
                        <td>{{ book.id }}</td>
                        <td>{{ book.Name }}</td>
                        <td>{{ book.Telephone }}</td>
                        <td>{{ book.Lapangan }}</td>
                        <td>{{ book.Tanggal }}</td>
                        <td>{{ book.Waktu }}</td>
                        <td>{{ book.Keterangan }}</td>

                        <td>
                          <button class="btn btn-success" @click="edit(book)">Edit</button> <button class="btn btn-danger" @click="hapus(book.id)">Delete</button>
                          <button v-if="book.Keterangan == 'Bayar Nanti'" class="btn btn-warning" @click="bayar(book.id)">Bayar</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-5">
                        <div class="card bg-primary shadow-lg border-0 rounded-lg mt-5">
                          <div class="card-header"><h3 class="text-center text-light font-weight-light my-4">Update</h3></div>
                          <div class="card-body">
                            <form>
                              <div class="form-floating mb-3">
                                <input class="form-control" v-model="id" id="inputName" type="text" placeholder="Roland Brilianto" disabled />
                                <label for="inputName">Id</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input class="form-control" v-model="name" id="inputName" type="text" placeholder="Roland Brilianto" disabled />
                                <label for="inputName">Nama</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input class="form-control" v-model="telNo" id="inputTelp" type="text" placeholder="Telepon" disabled />
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

                              <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <a class="btn btn-success" @click="update(data.booking)">Update</a>
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
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import NavigationBar from "@/components/NavigationBar.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  data() {
    return {
      name: "",
      telNo: "",
      tanggal: null,

      waktu: null,
      lapangan: null,
      id: "",
      judul: "Tribun dfsfsef",
      judul_second: "ghnfgb",
      keteranganBayar: "Lunas",
    };
  },
  components: {
    NavigationBar,
    SideBar,
  },
  methods: {
    updated(previousResult, { subscriptionData }) {
      return {
        booking: subscriptionData.data.booking,
      };
    },
    edit(book) {
      this.id = book.id;
      this.name = book.Name;
      this.telNo = book.Telephone;
      this.lapangan = book.Lapangan;
      this.waktu = book.Waktu;
      this.tanggal = book.Tanggal;
    },
    update(booking) {
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
          alert("Update GAGAL! silahkan update di jadwal yang belom ter booking, silahkan liat tabel");
        } else {
          this.$apollo.mutate({
            mutation: gql`
              mutation MyMutation2($id: Int!, $Tanggal: date!, $Lapangan: String!, $Waktu: String!) {
                update_booking_by_pk(pk_columns: { id: $id }, _set: { Tanggal: $Tanggal, Lapangan: $Lapangan, Waktu: $Waktu }) {
                  Tanggal
                  Waktu
                  Lapangan
                }
              }
            `,
            variables: {
              id: this.id,
              Tanggal: this.tanggal,
              Waktu: this.waktu,
              Lapangan: this.lapangan,
            },
          });
          alert("Update Berhasil");
          this.id = "";
          this.name = "";
          this.telNo = "";
          this.lapangan = null;
          this.waktu = null;
          this.tanggal = null;
        }
      }
    },
    hapus(id) {
      this.$apollo.mutate({
        mutation: gql`
          mutation MyMutation3($id: Int!) {
            delete_booking_by_pk(id: $id) {
              id
            }
          }
        `,
        variables: {
          id: id,
        },
      });
      alert("sukses delete");
    },
    bayar(id) {
      this.$apollo.mutate({
        mutation: gql`
          mutation MyMutation($id: Int!, $Keterangan: String!) {
            update_booking_by_pk(pk_columns: { id: $id }, _set: { Keterangan: $Keterangan }) {
              Keterangan
              id
            }
          }
        `,
        variables: {
          id: id,
          Keterangan: this.keteranganBayar,
        },
      });
      alert("sukses bayar");
    },

    Test(fasilitas) {
      // if (this.id == id && this.judul == judul && this.judul_second == judul_second) {
      //   console.log("masukan data lain");
      // } else {
      //   console.log("data masuk");
      // }
      console.log(fasilitas);
      let i;
      let flag = 0;
      for (i = 0; i < fasilitas.length; i++) {
        if (this.id == fasilitas[i].id && this.judul == fasilitas[i].judul && this.judul_second == fasilitas[i].judul_second) {
          flag = flag + 1;
        }
      }
      if (flag > 0) {
        console.log("masukan data lain");
      } else {
        console.log("data masuk");
      }
    },
  },
};
</script>
<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
</style>
