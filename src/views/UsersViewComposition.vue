<template>
  <div class="user-back">
    <div class="user-list">
      <h2>Зал славы кликеров</h2>
      <button class="btn" @click="fetchUsers">Обновить</button>
      <h2 v-if="isLoading">Вспоминаем всех поименно...</h2>
      <h2 v-else-if="isError">Увы, мы так и не узнали наших героев</h2>
      <div v-else class="user-cont">
        <div @click="redirectToUser(user.id)" :key="user.id" v-for="user in usersList" class="card">
          <div>Имя пользователя: {{ user.username }}</div>
          <div>Электронная почта: {{ user.email }}</div>
          <div>Контактный телефон: {{ user.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $api } from '@/api'
import { useUserStore } from '@/stores/userStore'
// import type { AxiosError } from 'axios'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// const users = ref<IUser[]>([])
// interface IUser {
//   id: number
//   username: string
//   email: string
//   phone: string
// }
// const users = ref([])

// Получение юзеров через AXIOS
// const isLoading = ref(false)
// const isError = ref(false)
// const fetchUsers = async () => {
//   isLoading.value = true
//   isError.value = false
//   try {
//     const { data } = await $api.get<IUser[]>('/users')
//     console.log(data)
//     users.value = data
//   } catch (error: unknown) {
//     console.error(error as AxiosError)
//     isError.value = true
//   } finally {
//     isLoading.value = false
//   }
// }
// fetchUsers()
const router = useRouter()
const userStore = useUserStore()
const { isError, isLoading, usersList } = storeToRefs(userStore)
const { fetchUsers } = userStore
fetchUsers()
const redirectToUser = (id: number) => {
  router.push(`/user/${id}`)
}
</script>

<style scoped>
.card {
  padding: 10px;
  border-radius: 10px;
  background-color: blueviolet;
  color: white;
  width: 100%;
  max-width: 500px;
}
.card :nth-child(1) {
  font-weight: 700;
}
.user-cont {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.user-list {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.user-back {
  min-height: 100%;
  background: linear-gradient(0deg, greenyellow, black);
}
h2 {
  font-weight: 500;
  color: white;
}
.btn {
  margin: 5px;
  padding: 8px;
  background: greenyellow;
  border-radius: 10px;
  border: transparent;
}
</style>
