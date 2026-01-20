<template>
  <div class="aside">
    <button>Статистика по кликам</button>
    <button>Курс биткоина к клику</button>
    <button>Зал славы кликеров</button>
    <button>Создай своего хомяка</button>
    <button>Обратная связь</button>
    <button>Часто задаваемые вопросы</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.aside {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
</style>
