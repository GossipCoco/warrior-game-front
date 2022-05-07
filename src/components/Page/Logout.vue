<template>
  <div class="main-global-container">
    <div class="card form-global-contain">
      
      <!-- </form> -->
    </div>
  </div>
</template>
<script>
import jwtAPI from "../../api/JwtApi";
export default {
  name: "Logout",
  data() {
    return {
      utilisateur: {
        id: null,
        password: null,
      },
    };
  },
  created() {
      jwtAPI.IsLogged()
      jwtAPI.Disconnect(this.$router);
  },
  methods: {
  },
};
</script>