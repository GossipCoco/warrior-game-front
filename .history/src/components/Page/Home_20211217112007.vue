<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 left-container">
          <side-bar />
      </div>
      <div class="col-10 right-container">
        <navbar />
        <div class="row">
          <div class="col">
            <global-layout />
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