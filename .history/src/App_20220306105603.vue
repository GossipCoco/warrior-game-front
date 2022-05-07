<template>
    <router-view></router-view>
</template>
<script>
import JwtApi from './api/JwtApi'

export default {
  name: 'App',
  data() {
    return {
      currentURL: null,
      jwtAPI: null,
      currentUser: null
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    this.jwtAPI = JwtApi
    this.currentUser = this.$route.params.idUser
    if(!this.currentUser) this.$router.push({ path: "/signin" }).catch(() => {})
    console.log(JwtApi.IsLogged(), this.currentUser)
  }
}
</script>