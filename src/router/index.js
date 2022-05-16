import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "../views/IndexView.vue";
import DashboardView from "../views/DashboardView.vue";
import DashboardTable from "../views/DashboardTable.vue";
import DashboardForm from "../views/DashboardForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/dashboard-table",
    name: "dashboardTable",
    component: DashboardTable,
  },
  {
    path: "/dashboard-form",
    name: "dashboardForm",
    component: DashboardForm,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
