<template>
    <span>{{ context.content }}</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import RenderContext from '@/models//RenderContext';

@Component
export default class NerdText extends Vue {
    @Prop(Object)
    readonly context!: RenderContext;
}
</script>