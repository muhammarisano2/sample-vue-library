<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button"
  data-toggle="collapse"
  data-target="#navbarNav"
  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/home">Home <span class="sr-only">
          (current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">Features</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
<style scoped>

</style>
