<template>
  <b-card :title="character.CurrentName">
    <b-card-text>
      {{character}}
    </b-card-text>
  </b-card>
</template>
<script>
import CharacterService from "../../services/CharacterService";

export default {
  name: "CharacterDetails",
  data() {
    return {
      character: {},
      url: "",
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
          this.character = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>