<template>
  <div class="nerd-row">
    <component
      :is="`nerd-${ctx.type}`"
      :key="index"
      :context="ctx"
      v-for="(ctx, index) in context.content"
    ></component>
  </div>
</template>

<script lang="ts">
import RenderContext from '@/models//RenderContext';
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NerdRow extends Vue {
  @Prop(Object)
  readonly context!: RenderContext;
}
</script>

<style lang="scss" scoped>
.nerd-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 5px 0px;
}
</style>
