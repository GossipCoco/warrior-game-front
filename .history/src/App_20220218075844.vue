<template>
    <router-view></router-view>
</template>
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
    }
  },
  created() {
    this.jwtAPI = JwtApi
      if (!JwtApi.IsLogged()){        
        this.$router.push({ path: "/signin" }).catch(() => {})
      }
      else{
        JwtApi.SetUser()
      }
  }
}
</script>