<template>
{{currentUser}}
    <router-view></router-view>
</template>
<script>
import JwtApi from './api/JwtApi'

import EventBus from "./http/EventBus";
export default {
  name: 'App',
  data() {
    return {
      currentURL: null,
      jwtAPI: null,
      currentUser: null
    }
  },
  created() {
    this.jwtAPI = JwtApi
    this.currentUser = this.$route.params.idUser
    //if(!this.currentUser) this.$router.push({ path: "/signin" }).catch(() => {})
    //console.log(JwtApi.IsLogged(), this.currentUser)
  },
  
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  mounted() {
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
}
</script>