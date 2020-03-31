<template>
<div>
<Navbar/>
<router-view></router-view>
</div>
</template>

<script>
import Navbar from '../../components/_module/Navbar.vue';

export default {
  name: 'Main',
  components: {
    Navbar,
  },
};
</script>

<style>

</style>
