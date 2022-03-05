<template>
  <div class="row">
    <div class="col">
      <div class="main-container">
        <character-layout />
        <profil-user />
      </div>
    </div>
  </div>
</template>
<script>
import CharacterLayout from "../Character/CharacterLayout.vue";
import ProfilUser from "../User/ProfilUser.vue";

export default {
  name: "GlobalLayout",
  components: { ProfilUser, CharacterLayout },
};
</script>