<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-12">  
        <div class="card-group">
          <div v-for="(character, index) in characters" :key="index">
            <character-info v-bind:character="character" />
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>
<script>
import CharacterService from '../../services/CharacterService'
import CharacterInfo from "./CharacterInfo.vue";
export default {
  name: "CharacterLayout",
  components: {
    CharacterInfo,
  },
  data(){
    return {
      characters : {}
    }
  },
  mounted(){
    this.getAllCharacters()
  },
  methods: {
    getAllCharacters(){
      CharacterService.getAllCharacters()
      .then((response) => {
          this.characters = response.data.ob
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
};
</script>
