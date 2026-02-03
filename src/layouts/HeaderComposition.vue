<template>
  <div class="header">
    <div class="head">Здесь будет логотип и номер телефона, но я пока не придумала</div>
    <div class="button"><button class="switcher" >Сменить тему</button></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  height: 70px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3 1fr);
  align-content: space-around;
  font-size: 20px;
  color: white;
  background-color: blueviolet;
}

.head {
  grid-column: 3;
  align-items: center;
}
.button {
  grid-column: 4;
}

.switcher {
  
  background-color: white;
  border: 1px solid blueviolet;
  padding: 7px;
  font-size: 15px;
  font-weight: 600;
  color: blueviolet;
  border-radius: 5px;
}
</style>