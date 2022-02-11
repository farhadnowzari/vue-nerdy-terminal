<template>
  <div class="nerdy-terminal">
    <!-- 
            Be very careful with the intro text ;)
        -->
    <p class="intro" v-if="intro" v-html="intro"></p>
    <CommandLineBase
      @execute="tryToExecuteDefault(commands[index])"
      :key="index"
      v-for="(cmd, index) in commands"
      v-model="commands[index]"
    ></CommandLineBase>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CommandLine from "../models/CommandLine";
import CommandLineBase from "./CommandLineBase.vue";

@Component({
  components: {
    CommandLineBase,
  },
})
export default class NerdyTerminal extends Vue {
  @Prop(String)
  readonly intro!: string;
  @Prop(String)
  readonly rootPath!: string;

  commands: CommandLine[] = [];

  newLine(): void {
    this.commands.push(CommandLine.init(this.rootPath));
  }

  writeLine(commandLine: CommandLine): void {
      this.commands.push(commandLine);
      return;
  }

  tryToExecuteDefault(cmd?: CommandLine): void {
    if (!cmd) return;
    if (cmd.command === "clear" || cmd.command === "cls") {
      this.commands = [];
      this.$nextTick(() => {
        this.newLine();
      });
      return;
    }
    this.$emit("execute", cmd);
  }

  mounted(): void {
    this.newLine();
  }
}
</script>

<style lang="scss" scoped>
.nerdy-terminal {
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  top: 0;
  left: 0;
  background-color: #000;
  font-family: "consolas";
  color: #4e9a06;
  padding: 20px;
  box-sizing: border-box;
  .intro {
    padding: 0;
    margin-top: 0;
    margin-bottom: 10px;
  }
}
</style>
