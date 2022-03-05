<template>
  <navbar />
  <div class="global-container">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 col-md-2 col-sm-2 col-lg-2">
          <side-bar />
        </div>
        <div class="col-10 col-md-10 col-lg-10">
          <div class="main-container">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../Menu/Navbar.vue";
import SideBar from "../Menu/SideBar.vue"
import GlobalLayout from "../Layout/GlobalLayout.vue";
export default {
  name: "Home",
  components: { GlobalLayout, Navbar, SideBar },
};
</script>