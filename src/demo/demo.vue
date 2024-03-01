<!--
 * @author: 刘汇源lwx188666
 * @since: 2024-02-24
 * demo.vue
-->
<template>
    <div ref="container" class="container">demo</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import Konva from '@konva';

type StageInstance = InstanceType<typeof Konva.Stage>;
type LayerInstance = InstanceType<typeof Konva.Layer>;

// 创建矩形
function createRect(layer: LayerInstance) {
    const rect = new Konva.Rect({
        x: 10,
        y: 10,
        width: 100,
        height: 100,
        fill: 'green',
        cornerRadius: [20, 30, 40, 60],
    });
    layer.add(rect);
}

// 初始化
function initLayer(stage: StageInstance) {
    // 初始化layer
    const layer = new Konva.Layer();
    stage.add(layer);

    // 1.创建矩形
    createRect(layer);
}

onMounted(() => {
    // 创建舞台
    const stage = new Konva.Stage({
        container: '.container',
        width: 500,
        height: 500,
    });
    initLayer(stage);
});
</script>

<style scoped>
.container {
    width: 500px;
    height: 500px;
}
</style>
