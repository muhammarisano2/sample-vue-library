import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// video youtube
// https://www.youtube.com/watch?v=Wy9q22isx3U
// https://www.youtube.com/watch?v=EmCBOtkXxdg&list=PLCZlgfAG0GXCFeOD_wBc9GrYF9pA8loLQ

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
