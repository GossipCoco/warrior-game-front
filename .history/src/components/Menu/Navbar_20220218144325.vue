<template>
  <div class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="logo-navbar"></div>
      <a class="navbar-brand" href="#">
        <div class="logo-container">
          <img :src="require('../../assets/images/cat.svg')" />
        </div>
      </a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/home">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/user">Profil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/logout">Déconnexion</router-link>
          </li>
        </ul>
      </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>