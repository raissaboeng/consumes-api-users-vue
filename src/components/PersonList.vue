<template>
  <ul id="list">
    <h2 v-if="listUsers">{{ listUsers.length }} Users</h2>
    <li v-for="user in listUsers" :key="user.id">
      <PersonItem :user="user" v-on:handle-delete="handleDelete(user.id)" />
    </li>
  </ul>
</template>

<script>
import PersonItem from "./PersonItem";

export default {
  name: "PersonList",
  components: {
    PersonItem,
  },
  props: {
    listUsers: {
      type: Array,
    },
  },
  methods: {
    handleDelete(id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<style scoped>
ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-top: 10%;
}

h2 {
  color: #474A51;
  width: 100%;
  text-align: start;
  margin-left: 35%;
  margin-bottom: 1.5rem;
}

li {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>