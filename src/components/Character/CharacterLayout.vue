<template>
  <div class="character-container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recherche d'un personnage"
              aria-label="Recherche d'un personnage"
              aria-describedby="basic-addon2"
              v-model="characterSearch"
              @change="search()"
            />
            <span class="input-group-text" id="basic-addon2">Rechercher</span>
          </div>
        </div>
      </div>
      
      <div class="col">
        <router-link type="button" to="/character/create">Créer un nouveau personnage</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
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
import CharacterService from "../../services/CharacterService";
import CharacterInfo from "./CharacterInfo.vue";
export default {
  name: "CharacterLayout",
  components: {
    CharacterInfo,
  },
  data() {
    return {
      characters: {},
      characterSearch: '',
      characterFound: {}
    };
  },
  mounted() {
    this.getAllCharacters();
  },
  methods: {
    search(){
      console.log(this.characterSearch)
      CharacterService.getCharacterByNameSearch(this.characterSearch)
        .then((response) => {
          console.log(response.data.ob)
          this.characterFound = response.data.ob;
          console.log(this.characterFound);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getAllCharacters() {
      CharacterService.getAllCharacters()
        .then((response) => {
          this.characters = response.data.ob;
          console.log(this.characters);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
