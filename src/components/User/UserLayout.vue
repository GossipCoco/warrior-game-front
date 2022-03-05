<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <profil-user />
      </div>
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>
  </div>
</template>
<script>
import ProfilUser from "./ProfilUser.vue";
export default {
  name: "CharacterLayout",
  components: {
    ProfilUser,
  },
};
</script>