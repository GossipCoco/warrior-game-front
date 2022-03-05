<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <router-link to="/home" class=" d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">La Guerre des Clans - le jeu</span>
      </router-link>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/home" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item"><a href="#" class="nav-link">Profil</a></li>
        <li class="nav-item"><router-link to="/" class="nav-link">Déconnexion</router-link></li>
      </ul>
    </header>
</template>
<script>
export default {
  name: "Navbar",
};
</script>