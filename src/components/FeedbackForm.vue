<template>
  <div>
    <h2>Создай команду</h2>
    <div class="send-group">
      <input
        v-model="user"
        @keydown.enter.prevent="saveUser"
        type="text"
        placeholder="Впиши имя пользователя"
      />
      <button @click="saveUser">Отправить</button>
      <button @click="clearList">Сбросить все</button>
    </div>
    <div v-if="saveUserList.length > 0" class="saved-users">
      <ol>
        <li
          :class="{ 'dark-theme': isDark, 'light-theme': !isDark }"
          class="list"
          v-for="(item, index) in saveUserList"
          :key="index"
          @click="deleteChoosen(index)"
          :data-tooltip="`Удалить`"
        >
          {{ item }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from './composable/useLocalStorage'
//props
defineProps<{
  isDark?: boolean
}>()

const user = ref('')
const saveUserList = useLocalStorage<string[]>('список пользователей', [])
const saveUser = () => {
  if (user.value.trim()) {
    saveUserList.value.push(user.value.trim())
  }
  user.value = ''
}
const clearList = () => {
  saveUserList.value = []
}
const deleteChoosen = (index: unknown) => {
  saveUserList.value = saveUserList.value.filter((_, i) => i !== index)
}
</script>

<style scoped>
h2 {
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: blueviolet;
  padding: 15px;
  border-radius: 20px;
  font-weight: 700;
}
.send-group {
  margin-bottom: 30px;
  display: flex;
  gap: 5px;
}
input {
  padding: 15px;
  border-radius: 15px;
  border: 1px solid blueviolet;
  color: black;
  background-color: white;
}
input:active {
  border: 1px solid blueviolet;
}
input:focus {
  outline: none;
  border: 4px solid blueviolet;
}
button {
  padding: 15px;
  border-radius: 15px;
  border: 1px solid transparent;
  background-color: blueviolet;
  color: white;
}
li {
  color: black;
}
ol {
  position: relative;
}
.list {
  position: relative;
  cursor: pointer;
  /* overflow: visible; */
}
.list[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  background-color: red;
  color: white;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  z-index: 1000;
  margin-left: 0;
}
.dark-theme .list[data-tooltip]:hover::after {
  background-color: black;
  color: greenyellow;
}
</style>
