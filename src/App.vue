<template>
  <div id="app">
    <Header />
    <PersonList :listUsers="users" v-on:delete="deleteUser" />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "./components/Header";
import PersonList from "./components/PersonList";

export default {
  name: "App",
  components: {
    Header,
    PersonList,
  },
  data() {
    return {
      users: null,
    };
  },
  methods: {
    deleteUser(id) {
      const remainingUsers = this.users.filter((user) => id !== user.id);
      this.users = remainingUsers;
      Vue.$toast.success("User deleted!");
    },
  },
  async created() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response) {
      let data = await response.json();
      data.sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
      this.users = data;
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  height: 100% auto;
}

body {
  text-align: center;
  font-family: "Hind", sans-serif;
  font-size: 0.9rem;
  background-color: #f1f1f1;
  -webkit-font-smoothing: antialiased;
}
</style>

