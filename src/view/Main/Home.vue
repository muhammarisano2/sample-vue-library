<template>
  <div>
    <Header/>
    <div class="content">
      <div class="row">
        <div class="col-md-3">
          <Sidebar/>
        </div>
        <div class="col-md-9">
          <AddBook v-on:add-book="addBookmaster"/>
          <ContainerBook :books="books"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import Navbar from '../../components/_module/Navbar.vue';
import Header from '../../components/_module/Header.vue';
import Sidebar from '../../components/_module/Sidebar.vue';
import AddBook from '../../components/_module/AddBook.vue';
import ContainerBook from '../../components/_module/ContainerBook.vue';

export default {
  name: 'App',
  components: {
    // Navbar,
    Header,
    Sidebar,
    AddBook,
    ContainerBook,
  },
  methods: {
    addBookmaster(newBook) {
      this.books = [...this.books, newBook];
    },
  },
  data() {
    return {
      books: [
      ],
      container: null,
    };
  },
  mounted() {
    axios.get('http://api.tvmaze.com/search/shows?q=naruto')
      .then((res) => {
        this.books = res.data;
      });
  },
};
</script>

<style>

</style>
