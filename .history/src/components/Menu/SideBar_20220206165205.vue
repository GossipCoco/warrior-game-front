<template>
  <div class="menu-left d-flex flex-column flex-shrink-0 p-3">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="li-level1">
        <div class="menu-level1">
          <div class="icon-menu-container">
            <i class="fas fa-home"></i>
          </div>
          <div class="link-menu-container">
            <router-link to="/dashboard">Dashboard</router-link>
          </div>
        </div>
      </li>
      <li class="li-level1">
        <div class="menu-level1">
          <div class="icon-menu-container">
            <i class="fas fa-house-user"></i>
          </div>
          <div class="link-menu-container">
            Jeu
          </div>
        </div>
        <ul class="sub-menu">
          <li>
            <router-link to="/character"><div class="icon-menu-container">
            <i class="fas fa-cat"></i>
          </div> les Personnages</router-link>
          </li>
          <li>Créer un personnage</li>
          <li>Créer une partie</li>
          <li>Vos parties</li>
        </ul>
      </li>
      <li class="li-level1">
        <div class="menu-level1">
          <div class="menu-level1">
            <div class="icon-menu-container">
          <i class="fas fa-house-user"></i>
          </div>
          <div class="link-menu-container">
            Panel Admin
          </div>
        </div>
        </div>
        <ul  class="sub-menu">
          <li>
            <router-link to="/user">Tous les utilisateurs</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideBar",
};
</script>