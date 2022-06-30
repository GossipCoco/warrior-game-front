<template>
  <div class="card" style="width: 75rem; height: 550px">
    <div class="card-body">
      <h2>Création d'un Personnage</h2>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="row">
          <div class="col">
            <label for="clanChoice" class="form-label">Clan</label>
            <select
              id="clanChoice"
              class="form-select"
              aria-label="Clan"
              v-model="form.clanSelected"
            >
              <option selected>Choisir un clan</option>
              <option
                v-for="(clan, index) in clans"
                :key="index"
                :value="clan.Id"
              >
                {{ clan.Name }}
              </option>
            </select>
          </div>
          <div class="col">
            <label for="gradeChoice" class="form-label">Grade</label>
            <select
              id="gradeChoice"
              class="form-select"
              :aria-label="form.gradeSelected"
              v-model="form.gradeSelected"
              :aria-placeholder="form.gradeSelected"
            >
              <option
                v-for="(grade, index) in grade.Grades"
                :key="index"
                :value="grade"
              >
                {{ grade.value }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <b-form-group
              id="input-group-2"
              label="Nom du personnage"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Saisir le nom"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col">


          </div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col">
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <b-button type="submit" variant="primary">Submit</b-button>
          <div class="col"></div>
        </div>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>
<script>
import ClanService from "../../services/ClanService"
import CharacterService from '../../services/CharacterService'
import GradeLocalDatas from "../../services/GradeLocalDatas"
export default {
  name: "CharacterCreate",
  components: {},
  data() {
    return {
      clans: {},
      grade: GradeLocalDatas,
      show: true,
      form: {
        userId: 'gossipCoco', 
        clanSelected: 'Choisir un clan',
        gradeSelected: 'Choisir un grade',
        name: '',
        age: ''
      },
    };
  },
  mounted() {
    this.getAllClans();
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form))
      console.log(this.form)
      CharacterService.createANewCharacter(this.form)
       .then((response) => {
          console.log(response)
        })
        .catch((e) => {
          console.log(e);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = ""
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
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