<template>
  <div class="card" style="width: 88rem">
    <div class="card-body">
      <h5 class="card-title">Liste de tous les utilisateurs</h5>
      <!-- <b-table striped hover :items="users"></b-table> -->
      <table class="table">
        <tr>
          <td>Info</td>
          <td>Actions</td>
        </tr>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.LastName }} {{ user.FirstName }}</td>
          <td>
            <user-modal :user="user" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import UserService from "../../services/UserService"
import UserLocalData from "../../services/UserLocalData"
import UserModal from "./UserModal.vue"
export default {
  name: "AllUsers",
  components:{
    UserModal
  },
  data() {
    return {
      users: UserLocalData,
    };
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      UserService.getAllUsers()
        .then((response) => {
          this.users = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>