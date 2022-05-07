<template>
  <div class="global-container">
    <div class="container-fluid">
      <navbar />
      <div class="row">
        <div class="col-2 col-md-2 col-sm-2 col-lg-2 side-bar">
          <side-bar />
        </div>
        <div class="col-10 col-md-10 col-lg-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../Menu/Navbar.vue";
import SideBar from "../Menu/SideBar.vue";
export default {
  name: "Home",
  components: { Navbar, SideBar },
  
};
</script>