<template>
  <div class="profil-user-card card">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <h6 class="card-subtitle mb-2 text-muted"></h6>
      <p class="card-text">
      
      </p>
    </div>
  </div>
</template>
<script>
import UserLocalData from "../../services/UserLocalData";
export default {
  name: "ProfilUser",
  data() {
    return {
      user: {},
      username: ''
    };
  },
  mounted() {
    this.user = UserLocalData;
  },
};
</script>