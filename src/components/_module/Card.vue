<template>
<div class="card" style="width: 15rem;">
  <img :src="book.show.image.medium" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{book.show.name}}</h5>
    <p class="card-text">
     {{book.description}}</p>
    <a href="#" class="btn btn-primary">Add</a>
  </div>
</div>
</template>
<script>
export default {
  name: 'Card',
  props: ['book'],
};
</script>
<style scoped>
