<template>
<form>
  <div class="form-group">
    <label for="title">Judul Buku</label>
    <input type="text" class="form-control" id="title"
    aria-describedby="emailHelp" v-model="title">
  </div>
   <div class="form-group">
    <label for="description">Description</label>
    <input type="text" class="form-control" id="description"
    aria-describedby="emailHelp" v-model="description">
  </div>
   <div class="form-group">
    <label for="image">Gambar</label>
    <input type="text" class="form-control" id="image"
    aria-describedby="emailHelp" v-model="image">
  </div>
  <button type="submit" class="btn btn-primary" @click="addBook">Submit</button>
</form>
</template>
<script>
export default {
  name: 'AddBook',
  data() {
    return {
      title: '',
      image: '',
      description: '',
    };
  },
  methods: {
    addBook(e) {
      e.preventDefault();
      const data = {
        title: this.title,
        image: this.image,
        description: this.description,
      };
      this.$emit('add-book', data);
      this.title = '';
      this.image = '';
      this.description = '';
    },
  },
};
</script>
<style scoped>
