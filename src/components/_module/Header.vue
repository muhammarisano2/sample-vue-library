<template>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Librarty Coba</h1>
    <p class="lead">This is a modified jumbotron that occupies
      the entire horizontal space of its parent.</p>
  </div>
</div>
</template>
<script>
export default {
  name: 'Header',
};
</script>
<style lang="scss" scoped>
.jumbotron{
  height: 400px !important;
  background-image: url('../../assets/img/bg.jpeg');
}
.container{
  .display-4{
    color: #fff;
    font-weight: bold;
    text-shadow: 2px 2px rgba(0, 0, 0, .5);
  }
}

</style>
