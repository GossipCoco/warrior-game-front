<template>

  <div class="card mb-3">
              <div
            class="card-image clan-card"
            v-bind:style="{
              backgroundImage: 'url(/images/Backgrounds/' + clan.Image + ')',
            }"
          ></div>
    <div class="card-body">
      <h5 class="card-title">{{ clan.Name }}</h5>
      <div class="card-text">
        <p>{{clan.Description}}</p>
        <p>{{clan}}</p>
      </div>

    </div>
  </div>
</template>
<script>
import ClanService from "../../services/ClanService";
export default {
  name: "ClanDetails",
  data() {
    return {
      url: "",
      clan: {},
    };
  },
  created() {
    this.url = this.$route.params.id;
    console.log(this.url);
  },
  mounted() {
    this.getClan();
  },
  methods: {
    getClan() {
      ClanService.getClanByName(this.url)
        .then((response) => {
          console.log(response.data.ob);
          this.clan = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
