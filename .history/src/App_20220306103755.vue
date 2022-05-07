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
  created() {
    this.jwtAPI = JwtApi
    this.currentUser = this.$route.params.id
    console.log(this.currentURL)
      // if (!JwtApi.IsLogged()){        
      //   this.$router.push({ path: "/signin" }).catch(() => {})
      // }
      // else{
      //   JwtApi.SetUser()
      // }
  }
}
</script>