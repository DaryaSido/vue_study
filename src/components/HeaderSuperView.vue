<template>
  <div class="header">
    <div class="head">Название страницы</div>
    <div class="button"><button class="switcher">Сменить тему</button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.header {
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(3 1fr);
  align-content: space-around;
  font-size: 30px;
  color: white;
  background-color: blueviolet;
  height: 70px;
}
.head {
  grid-column: 3;
  align-items: center;
}
.button {
  grid-column: 4;
}
.switcher {
  /* grid-column: 4; */
  background-color: white;
  border: 1px solid blueviolet;
  padding: 7px;
  font-size: 15px;
  font-weight: 600;
  color: blueviolet;
  border-radius: 5px;
}
</style>
