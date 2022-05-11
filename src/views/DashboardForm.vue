<template>
  <div class="dashboard">
    <NavigationBar />

    <div class="container-fluid">
      <div class="row">
        <SideBar />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Book Now</h1>
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card bg-primary shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header"><h3 class="text-center text-light font-weight-light my-4">Booking</h3></div>
                  <div class="card-body">
                    <form>
                      <div class="form-floating mb-3">
                        <input class="form-control" id="inputName" type="text" placeholder="Roland Brilianto" />
                        <label for="inputName">Nama</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input class="form-control" id="inputTelp" type="text" placeholder="Telepon" />
                        <label for="inputTelp">Telepon</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input class="form-control" id="date" type="date" placeholder="Tanggal" />
                        <label for="inputDate">Tanggal</label>
                      </div>
                      <div class="form-floating mb-3">
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Pilih Lapangan</option>
                          <option value="1">Lapangan 1</option>
                          <option value="2">Lapangan 2</option>
                        </select>

                        <label for="inputDate">Lapangan</label>
                      </div>
                      <div class="form-floating mb-3">
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Pilih Waktu</option>
                          <option value="1">16.00 - 17.00</option>
                          <option value="2">17.00 - 18.00</option>
                          <option value="3">18.00 - 19.00</option>
                          <option value="3">19.00 - 20.00</option>
                          <option value="3">20.00 - 21.00</option>
                          <option value="3">21.00 - 22.00</option>
                          <option value="3">22.00 - 23.00</option>
                          <option value="3">23.00 - 24.00</option>
                        </select>

                        <label for="inputDate">Pukul</label>
                      </div>
                      <div class="form-floating mb-3">
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Keterangan Bayar</option>
                          <option value="1">Langsung Bayar</option>
                          <option value="2">Bayar Nanti</option>
                        </select>

                        <label for="inputDate">Bayar</label>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a class="btn btn-success">Book Now</a>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center py-3">
                    <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  data() {
    return {};
  },

  components: {
    NavigationBar,
    SideBar,
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
