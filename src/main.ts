import Vue from 'vue'
import App from './App.vue'
import NerdColumn from '@/components/NerdyComponents/NerdColumn.vue';
import NerdRow from '@/components/NerdyComponents/NerdRow.vue';
import NerdText from '@/components/NerdyComponents/NerdText.vue';
Vue.config.productionTip = false

Vue.component('nerd-column', NerdColumn);
Vue.component('nerd-row', NerdRow);
Vue.component('nerd-text', NerdText);

new Vue({
  render: h => h(App),
}).$mount('#app')
