<template>
  <div id="app">
    <NerdyTerminal 
      root-path="nowzarifarhad"
      intro="Hi, <br/> This is fdn cli. <br/> To start, please enter: fdn --help"></NerdyTerminal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NerdyTerminal from './components/NerdyTerminal.vue';

@Component({
  components: {
    NerdyTerminal,
  },
})
export default class App extends Vue {}
</script>