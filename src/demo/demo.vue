<!--
 * @author: 刘汇源lwx188666
 * @since: 2024-02-24
 * test.vue
-->
<template>
    <div ref="container" class="contanier" tt="1">demo</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Konva from '@konva';

const container = ref<HTMLDivElement | null>(null);
console.log(Konva);
</script>

<style scoped></style>
