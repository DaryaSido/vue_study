<template>
  <div class="user-backgr">
    <h2 v-if="isLoading">Вспоминаем всех поименно...</h2>
    <h2 v-else-if="isError">Увы, мы так и не узнали наших героев</h2>
    <div class="user-card">
      <div></div>
      <div>Имя пользователя: {{ user.username }}</div>
      <div>Электронная почта: {{ user.email }}</div>
      <div>Контактный телефон: {{ user.phone }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()
const userStore = useUserStore()
const { isError, isLoading, user } = storeToRefs(userStore)
userStore.fetchUser(Number(route.params.id))
</script>

<style scoped>
.user-backg {
  min-height: 100%;
  width: 100%;
  background-color: black;
}
.user-card {
  margin: 5px;
  padding: 15px;
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: blueviolet;
  color: white;
}
</style>
