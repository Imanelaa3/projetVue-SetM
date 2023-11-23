
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'





</script>

<template>
  <div>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/collier">Colliers</RouterLink>
        <RouterLink to="/bracelet">Bracelets</RouterLink>
        <RouterLink to="/boreilles">Boucles</RouterLink>
       
      </nav>
  </header>
  <div class="wrapper">
   
  </div>
  <RouterView/>
</div>
</template>

<style scoped>
header {
  display: flex;
  flex-wrap: wrap;
  width: 1250px;
  max-height: 7vh;
  background-color: rgb(49, 49, 56);
  padding: 15px;
  margin: 0 auto;
  border-radius: 10px;
}

nav {
  width: auto;
  font-size: 20px;
  text-align: center;
  padding-left: 5px;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-radius: 10px;
}

nav a {
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.5rem;
  }
}
</style>