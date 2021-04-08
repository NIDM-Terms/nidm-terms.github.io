import Vue from 'vue';
import App from './App';
import router from './router';
import vueScrollto from 'vue-scrollto';
import ModuleLibrary from "vfg-field-array";

Vue.config.productionTip = false;

Vue.use(vueScrollto);
Vue.use(ModuleLibrary);

new Vue({
   el: '#app',
   router,
   components: { App },
   render: h => h(App)
});
