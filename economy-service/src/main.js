import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import './registerServiceWorker'
import store from './store'

Vue.component('v-select', vSelect);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
