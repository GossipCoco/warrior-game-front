<template>
  <div class="signin-container">
    <main class="form-signin">
      <form v-on:submit="login">
        <h1 class="h3 mb-3 fw-normal">Se connecter à son compte</h1>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="exemple"
            v-model="loginUser"
          />
          <label for="floatingInput">Login</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Mot de passe</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Se souvenir
          </label>
        </div>
        <div class="form-group">
          <div v-if="falsePassword" class="alert alert-danger" role="alert">
            {{ falsePassword }}
          </div>
        </div>
        <b-button type="submit" value="Login" class="w-100 btn btn-lg btn-primary">Se connecter</b-button>
        <p class="message">Pas encore membre ?</p>
        <p class="message">
          <router-link to="/register">Créer un compte</router-link>
        </p>
      </form>
    </main>
  </div>
</template>
<script>
import router from '../../router/index'
import UserService from '../../services/UserService'
import JwtApi from '../../api/JwtApi'
export default {
  name: "SignIn",
  data() {
    return {
        loginUser: null,
        password: null,
      falsePassword: null,
    };
  },
  created() {
    JwtApi.IsLogged();
  },
  methods: {
    login(e) {
      e.preventDefault();

      let loginUser = this.loginUser
      let password = this.password
      this.falsePassword = "Impossible de se connecter";
      let loginFct = () => {
        let data = {
          Login: loginUser,
          Password: password,
        }
        UserService.loginUser(data)
          .then((response) => {
            if (response.status == 200) {
              if (
                response.data.error === "Utilisateur non trouvé" ||
                response.data.error === "Mot de passe incorrect"
              ) {
                this.falsePassword = "Login ou Mot de passe incorrect";
                router.push("/signin");
              } else {
                JwtApi.Connexion(data).then((w) => {
                  console.log(w)
                  this.$router.push({ path: "/home" });
                });
                const usr = JwtApi.SetUser()
                console.log(usr)
              }
            } else {
              router.push("/signin");
            }
          })
          .catch((errors) => {
            console.log("Cannot log in", errors);
            this.falsePassword = "Login ou Mot de passe incorrect";
          })
        
      };
      loginFct();
    },
  },
};
</script>