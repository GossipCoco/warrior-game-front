<template>
  <div class="character-card card" style="width: 25rem">
     <!-- <div class="card-image" v-bind:style="{ backgroundImage: 'url(/images/Backgrounds/' + character.Warrior.Clan.Image + ')' }">
     <img :src="'/images/Characters/'+character.Image" />
    </div>
   <div class="card-header">{{ character.CurrentName }}</div>
    <div class="card-body">
      <p class="card-text">Nom : {{ character.CurrentName }}</p>
      
      
      <!-- <p>{{character}}</p> -->
      <p class="card-text"><router-link :to="'/character/'+character.Id">{{ character.CurrentName }}</router-link></p>
    </div> -->
    {{ character }}
  </div>
</template>
<script>
export default {
  name: "CharacterInfo",
  props: ["character"],
  data(){
    return{
      imageChar: ''
    }
  },
};
</script>