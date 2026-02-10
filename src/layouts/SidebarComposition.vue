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
import { computed, onMounted, watch, type CSSProperties } from 'vue';
import type { IIsDark } from './types';

//props

// const props = defineProps<IIsDark>();
// const isDark = props.type;
const isDark =  defineProps<IIsDark>();

// const { type: isDark } = defineProps<IIsDark>();
    // const isDark  = defineProps<IIsDark>();
//methods 

// const humsterImg = computed<CSSProperties>(()=> {
//     return {  background: `url(${isDark 
//         ? 'https://i0.wp.com/static.vecteezy.com/system/resources/previews/027/395/226/original/surprised-hamster-with-huge-eyes-png.png?ssl=1'
//         : 'https://static.vecteezy.com/system/resources/thumbnails/050/760/318/small/cute-hamster-isolated-on-a-transparent-background-png.png'
//     }) no-repeat center/cover`}
   
// }
// )

// const humsterClasses = computed(() => ({
//     [styles.humster-container-light]:true,
//     [styles.humster-container-dark]:isDark
// }));
const humsterClasses = computed(() => {
     console.log('isDark.value', isDark.type)
    return isDark.type 
        ? 'humster-container humster-container-dark'
        : 'humster-container humster-container-light';
});



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
    background: url(https://static.vecteezy.com/system/resources/thumbnails/050/760/318/small/cute-hamster-isolated-on-a-transparent-background-png.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.humster-container-dark {
    background: url(https://i0.wp.com/static.vecteezy.com/system/resources/previews/027/395/226/original/surprised-hamster-with-huge-eyes-png.png?ssl=1);
    background-size: cover;
    background-repeat: no-repeat;
}

</style>
