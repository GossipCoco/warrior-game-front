<template>
  <div class="character-card card" style="width: 25rem">
    <div class="card-image" v-if="character.Warrior" v-bind:style="{ backgroundImage: 'url(/images/Backgrounds/' + character.Warrior.Clan.Image + ')' }">
     <img :src="'/images/Characters/'+character.Image" />
    </div>
        <div class="card-image" v-else>
     <img :src="'/images/Characters/'+character.Image" />
    </div>
    <div class="card-header">{{ character.CurrentName }}</div>
    <div class="card-body">
      <p class="card-text">{{ character.CurrentName }}</p>
      <router-link :to="'/character/'+character.id" type="button">{{ character.CurrentName }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharacterInfo",
  props: ["character"],
};
</script>