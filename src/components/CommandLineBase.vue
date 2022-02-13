<template>
  <div class="command-line" v-if="!value.onlyRender">
    <span
      @click="$refs.commandRef.focus()"
      class="prefix"
      v-if="value.commandPrefix"
      >{{ value.commandPrefix }}</span
    >
    <div
      @keypress.enter="onExecute($event)"
      :contenteditable="!value.archived"
      ref="commandRef"
      class="command"
    >
      <span v-if="value.justResult" v-html="value.command"></span>
    </div>
  </div>
  <GenericComponent :context="value.renderContext" v-else></GenericComponent>
</template>

<script lang="ts">
import CommandLine from "@/models/CommandLine";
import GenericComponent from "@/components/GenericComponent.vue";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {
    GenericComponent,
  },
})
export default class CommandLineBase extends Vue {
  $refs!: {
    commandRef: HTMLElement;
  };

  @Prop(Object)
  readonly value!: CommandLine;

  @Watch("value", {
    deep: true,
  })
  onValueChanged(): void {
    this.$emit("input", this.value);
  }

  onExecute(e: KeyboardEvent): void {
    e.preventDefault();
    this.value.command = this.$refs.commandRef.innerText;
    this.value.archived = true;
    this.$emit("execute");
  }

  mounted(): void {
    this.$nextTick(() => {
      if(this.$refs.commandRef)
        this.$refs.commandRef.focus();
    });
  }
}
</script>

<style lang="scss" scoped>
.command-line {
  display: flex;
  align-items: center;
  .prefix {
    margin-right: 10px;
    font-weight: bold;
  }
  width: 100%;
  .command {
    width: 100%;
    outline: 0px solid transparent;
    caret-color: white;
  }
}
</style>
