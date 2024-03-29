<template>
    <div ref="container" class="a" ass="1212">demo</div>
</template>

<script setup lang="ts">
import Konva from 'konva';

import { onMounted, ref } from 'vue';

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

const container = ref<HTMLDivElement | null>(null);
onMounted(() => {
    if (container.value) {
        // 创建舞台
        const stage = new Konva.Stage({
            container: container.value,
            width: document.body.clientWidth,
            height: document.body.clientHeight,
        });
        initLayer(stage);
    }
});
</script>
