<template>
  <div class="nerd-column">
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
export default class NerdColoumn extends Vue {
  @Prop(Object)
  readonly context!: RenderContext;
}
</script>

<style lang="scss" scoped>
.nerd-column {
    align-self: stretch;
    width: 10%;
    margin-right: 10px;
}
</style>
