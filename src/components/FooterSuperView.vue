<template>
  <div class="cit">
    <div><blockquote>Будьте реалистами - требуйте невозможненького</blockquote></div>
    <div><cite> Че Геварушка</cite></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.cit {
  display: flex;
  justify-content: center;
  align-content: space-around;
  font-size: 20px;
  color: white;
  background-color: blueviolet;
}
blockquote {
  font-weight: 500;
  padding-right: 10px;
}
</style>
