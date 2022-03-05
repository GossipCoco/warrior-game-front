<template>
    <div class="menu-left d-flex flex-column flex-shrink-0 p-3 bg-white" style="width: 280px;">
      <div class="logo-container">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <img src="@/assets/images/chat.svg" class="logo-site"/>
    </a>
      </div>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <a href="#" class="nav-link">
          <i class="fas fa-house-user"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fas fa-gamepad"></i>
          Jeu
        </a>
        <ul>
          <li>
            Tous les Personnages
          </li>
          <li>
            Créer un personnage
          </li>
          <li>
            Créer une partie
          </li>
          <li>
            Vos parties
          </li>
        </ul>
      </li>
     </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="../../assets/images/Avatars/cat.jpg" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    name: 'SideBar'
}
</script>