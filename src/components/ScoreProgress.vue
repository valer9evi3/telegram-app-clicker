<template>
  <div class="progress">
    <h4 class="progress-level">
      <span>{{ store.currentScore }}/{{ store.currentLevel.score }}</span>
      <span>{{ store.currentLevel.level + 1 }}</span>
    </h4>
    <div class="progress-container">
      <div class="progress-value" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useScoreStore } from '../stores/score';
const store = useScoreStore();

const progress = computed(() => {
  return (store.currentScore / store.currentLevel.score) * 100;
});
</script>
