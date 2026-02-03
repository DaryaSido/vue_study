<template>
    <footer>
        <span class="phraze">Номер №1 в мире по продаже хомяков.</span>
    <span class="data">{{ new Date().getFullYear() }}</span>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
footer {
    padding: 20px;
    height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 30px;
  color: white;
  background-color: blueviolet;
}
.data {
    font-weight: 600;
    font-style: italic;
}
</style>