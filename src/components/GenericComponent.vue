<template>
    <component :context="context" :is="`nerd-${context.type}`"></component>
</template>

<script lang="ts">
import RenderContext from '@/models//RenderContext';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class GenericComponent extends Vue {
    @Prop(Object)
    readonly context!: RenderContext;
}
</script>