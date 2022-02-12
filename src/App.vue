<template>
  <div id="app">
    <NerdyTerminal 
    @execute="execute($event)"
      root-path="nowzarifarhad"
      intro="Hi, <br/> This is fdn cli. <br/> To start, please enter: fdn --help"
      ref="terminalRef"></NerdyTerminal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NerdyTerminal from './components/NerdyTerminal.vue';
import CommandLine from './models/CommandLine';

@Component({
  components: {
    NerdyTerminal,
  },
})
export default class App extends Vue {
  $refs!: {
    terminalRef: NerdyTerminal
  }
  execute(cmd: CommandLine): void {
    if(cmd.command === 'test')
      this.$refs.terminalRef.writeLine(CommandLine.log('<font color="red">wtf!</font>'));
    this.$refs.terminalRef.newLine();
  }
}
</script>