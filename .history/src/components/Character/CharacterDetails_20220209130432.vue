<template>

  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
         <div class="card-image" v-bind:style="{ backgroundImage: 'url(/images/Backgrounds/' + imageBackground + ')' }">
        <img :src="'/images/Characters/'+character.Image" />
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{character.CurrentName}}</h5>
          <p class="card-text">{{character}}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CharacterService from "../../services/CharacterService";

export default {
  name: "CharacterDetails",
  data() {
    return {
      character: {},
      url: "",
      imageBackground: ''
    };
  },
  created() {
    this.url = this.$route.params;
    console.log(this.url.id);
  },
  mounted() {
    this.getCharacterDetail(this.url.id);    
  },
  methods: {
    getCharacterDetail(id) {
      CharacterService.getCharacter(id)
        .then((response) => {
          this.character = response.data.ob
          if(this.character.Warrior){
              console.log(this.character.Warrior)
              this.imageBackground = this.character.Warrior.Clan.Image
            }else if(this.character.Loner){
              this.imageBackground = this.character.Loner.Clan.Image
            }else if(this.character.KittyPet){
              this.imageBackground = this.character.KittyPet.Clan.Image
            }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>