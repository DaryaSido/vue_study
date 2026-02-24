<template>
  <div class="sidebar">
    <div class="aside">
      <button>Статистика по кликам</button>
      <button>Курс биткоина к клику</button>
      <button>Зал славы кликеров</button>
      <button>Создай своего хомяка</button>
      <button>Обратная связь</button>
      <button>Часто задаваемые вопросы</button>
    </div>
    <div :class="humsterClasses" class="humster-container"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IIsDark } from './types'

//props

// const props = defineProps<IIsDark>();
// const isDark = props.type;
const isDark = defineProps<IIsDark>()

const humsterClasses = computed(() => {
  console.log('isDark.value', isDark.type)
  return isDark.type
    ? 'humster-container humster-container-dark'
    : 'humster-container humster-container-light'
})
</script>

<style scoped>
.aside {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: space-evenly; */
}
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
button {
  padding: 10px;
  background-color: blueviolet;
  font-size: 15px;
  font-weight: 700;
  color: white;
  border-radius: 5px;
  border: none;
}
button:hover {
  background-color: rgb(76, 18, 131);
  color: rgb(255, 255, 255);
}
.humster-container {
  width: 100%;
  min-height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
}
.humster-container-light {
  background: url('../assets/images/humster-light.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.humster-container-dark {
  background: url('../assets/images/humster-dark.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
