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
             <img src="/images/icons/gamepad-solid.svg" />
          </div>
          <div class="link-menu-container">
            <router-link to="/game">Jeu</router-link>
          </div>
        </div>
      </li>
      <li class="li-level1">
      <div class="menu-level1">
        <div class="icon-menu-container">
           <img src="/images/icons/cat-solid.svg" />
        </div>
        <div class="link-menu-container">
         
          <router-link to="/character">Personnages</router-link>
        </div>
      </div>
      </li>
      <li class="li-level1">
        <div class="menu-level1">
          <div class="icon-menu-container">
            <font-awesome-icon icon="fa-solid fa-cat" />
          </div>
          <div class="link-menu-container">
            <router-link to="/allClans">Clans</router-link>
          </div>
        </div>
      </li>
      <li class="li-level1">
        <div class="menu-level1">
          <div class="menu-level1">
            <div class="icon-menu-container">
              <i class="fas fa-house-user"></i>
            </div>
            <div class="link-menu-container">
              <router-link to="/admin">Panel Administrateur</router-link>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="menu-level1">
          <div class="menu-level1">
            <div class="icon-menu-container">
              <i class="fas fa-users"></i>
            </div>
            <div class="link-menu-container"><router-link to="/user">Utilisateurs</router-link></div>
          </div>
        </div>
        
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideBar",
};
</script>