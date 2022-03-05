<template>
  <div class="character-card card" style="width: 25rem">
    <!-- <div class="card-image" v-bind:style="{ backgroundImage: 'url(/images/Backgrounds/' + character.Warrior.Clan.Image + ')' }"> -->
     <img :src="'/images/Characters/'+character.Image" />
    <!-- </div> -->
    <div class="card-header">{{ character.CurrentName }}</div>
    <div class="card-body">
      <p class="card-text">{{ character.Warrior.Clan }}</p>
      <p>{{ imageChar }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharacterInfo",
  props: ["character"],
  data(){
    return{
      character: character,
      imageChar: ''
    }
  },
  mounted(){

  }
};
</script>