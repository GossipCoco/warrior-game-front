<template>
  <div class="character-container">
    <div class="card-group">
      <div v-for="(clan, index) in clans" :key="index">
        <div class="card" style="width: 25rem">
          <div
            class="card-image clan-card"
            v-bind:style="{
              backgroundImage: 'url(/images/Backgrounds/' + clan.Image + ')',
            }"
          ></div>
          <div class="card-header">{{ clan.Name }}</div>
          <div class="card-body">
            {{ clan.Description }}
            <router-link :to="'/clan/'+clan.Id">Plus de détails</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClanService from "../../services/ClanService";
export default {
  name: "AllClans",
  data() {
    return {
      imageChar: "",
      clans: {},
    };
  },
  mounted() {
    this.getAllClans();
  },
  methods: {
    getAllClans() {
      ClanService.getAllClans()
        .then((response) => {
          this.clans = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>