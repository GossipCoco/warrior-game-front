<template>
  <div class="signin-container">
    <main class="form-signin">
      <form>
        <h1 class="h3 mb-3 fw-normal">Se connecter à son compte</h1>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Mot de passe</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Se souvenir
          </label>
        </div>
        <router-link to="/home" type="button" class="w-100 btn btn-lg btn-primary">
          Se connecter
        </router-link>
              <p class="message">Pas encore membre ? <router-link to="/register">Créer un compte</router-link></p>
      </form>
    </main>
  </div>
</template>
<script>
export default {
  name: "SignIn",
  methods:{
    createCount(){

    }
  }
};
</script>