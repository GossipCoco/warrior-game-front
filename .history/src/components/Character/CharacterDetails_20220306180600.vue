<template>
  <div class="character-details card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <div
          class="card-image"
          v-bind:style="{ backgroundImage: 'url(/images/Backgrounds/' + background + ')' }"
        >
          <img :src="'/images/Characters/' + image" />
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ currentName }}</h5>
          <p v-for="(char, index) in character" :key="index">{{ char.Warrior }}</p>
          <p class="card-text">
            {{ genre }}
          </p>
          <p class="card-text">
            {{ description }}
          </p>
          <p class="card-text">
            <small class="text-muted"></small>
          </p>
          <p class="card-text">
            <router-link to="/character" type="button"  class="btn btn-primary">Retour à la liste des personnages</router-link>
          </p>
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
      url: "",
      character: {},
      image: null,
      background: null,
      currentName: null,
      genre: null,
      age: null,
      description: null,
      grade: null
    }
  },
  created() {

  },
  mounted() {
    this.url = this.$route.params.id;
    console.log(this.url);
    this.getCharacter();
  },
  methods: {
    getCharacter() {
      CharacterService.getCharacterByName(this.url)
        .then((response) => {
          this.character = response.data.ob
          this.image = response.data.ob[0].Image
          this.background = response.data.ob[0].Warrior.Clan.Image
          this.currentName = response.data.ob[0].CurrentName
          this.genre = response.data.ob[0].Genre
          this.age = response.data.ob[0].Age
          this.description = response.data.ob[0].Description
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
