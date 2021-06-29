import Vue from 'vue'
import App from './App.vue'
import MAceEditor from 'vue-m-ace-editor';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export const bus = new Vue();

Vue.use(MAceEditor);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
