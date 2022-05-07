<template>
  <div class="signin-container">
    <main class="form-signin">
      <div class="card" style="width: 38rem">
        <div class="card-body">
          <h5 class="card-title">Se connecter</h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <b-form v-on:submit="login">
            <b-form-group id="input-group-1" label="Login" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.login"
                type="text"
                placeholder="Login"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Mot de passe"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Mot de passe"
                required
              ></b-form-input>
            </b-form-group>
            <div class="form-group">
              <div v-if="falsePassword" class="alert alert-danger" role="alert">
                {{ falsePassword }}
              </div>
              <b-button type="submit" variant="primary">Se connecter</b-button>
              <br />
              <router-link to="/home" type="button">
                Se connecter directement
              </router-link>
            </div>
          </b-form>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
// import router from "../../routes/index";
// import UserService from "../../services/UserService";
import JwtApi from "../../api/JwtApi";
export default {
  name: "Login",
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
      falsePassword: null,
    };
  },
  created() {
    JwtApi.IsLogged();
  },
  // mounted() {
  //   this.$store
  //     .dispatch("auth/allUsers")
  //     .then((w) => {
  //       this.users = w.ob;
  //       console.log("Users: ", this.users);
  //     })
  //     .catch((err) => console.log(err));
  // },
  methods: {
    login(e) {
      e.preventDefault();
      let login = this.form.login;
      let pwd = this.form.password;
      this.$store
        .dispatch("auth/login", {
          Login: login,
          Password: pwd,
        })
        .then(
          () => {
            this.$router.push({ path: "/home" });
          },
          (error) => {
            if (!error) {
              this.falsePassword = "Login ou Mot de passe incorrect";
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          }
        )
        .catch((errors) => {
          console.log("Cannot log in", errors);
          this.falsePassword = "Login ou Mot de passe incorrect";
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.login = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>