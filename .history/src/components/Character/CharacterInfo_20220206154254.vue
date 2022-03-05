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
      <p class="card-text" v-if="character.Warrior">{{ character.Warrior.Clan }}</p>
      <p>{{ imageChar }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharacterInfo",
  props: ["character"],
};
</script>