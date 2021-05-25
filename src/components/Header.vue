<template>
  <div class="container">
    <div class="image">
      <img alt="logo" src="../assets/visie.svg" />
    </div>
    <nav class="menu">
      <ul>
        <li><a href="#list">Users</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100%;
  height: 10%;
  display: flex;
  background-color: white;
  align-items: center;
  box-shadow: 0px 5px 5px 0px rgba(50, 50, 50, 0.3);
  position: fixed;
  top: 0;
  z-index: 2;
}

.image {
  width: 10%;
}
.image img {
  width: 100%;
  margin: 10px;
}

.menu {
  width: 80%;
  justify-content: center;
  text-align: end;
}

.menu li {
  padding: 1.5rem 0 1.5rem 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: #474A51;
}
</style>