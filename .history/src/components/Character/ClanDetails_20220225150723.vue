<template>
    <div>
        Détail d'un clan
        {{ clan }}
    </div>
</template>
<script>
import ClanService from "../../services/ClanService";
export default{
    name: 'ClanDetails',
    data() {
    return {
      url: "",
      clan: {}
    }
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
                console.log(response.data.ob)
                this.clan = response.data.ob
            })
            .catch((e) => {
            console.log(e);
            });
      }
  }
}
</script>
