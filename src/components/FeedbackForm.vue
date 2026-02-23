<template>
    <div>
       <h2>Создай команду</h2>
       <div class="send-group">
            <input v-model="user" @keydown.enter.prevent="saveUser" type="text" placeholder="Впиши имя пользователя">
            <button @click="saveUser">Отправить</button>
            <button @click="clearList">Сбросить все</button>
            </div>
        <div v-if="saveUserList.length>0" class="saved-users">
            <ul>
                <li v-for="(item, index) in saveUserList" :key="index" @click="deleteChoosen(index)">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLocalStorage } from './composable/useLocalStorage';

const user = ref("");
const saveUserList = useLocalStorage<string[]>('список пользователей', []);
const saveUser = ()=> {
    if(user.value.trim()) {
        saveUserList.value.push(user.value.trim());
    }
     user.value= '';
}
const clearList = ()=>{
    saveUserList.value= [];
}
const deleteChoosen = (index:unknown) => {
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
    gap:5px
}
input {
    padding: 15px;
    border-radius: 15px;
    border: 1px solid blueviolet;
    color:black;
    background-color: white;
}
input:active {
    border: 1px solid blueviolet;
}
input:focus {
    border: 1px solid red;
}
button {
    padding: 15px;
    border-radius: 15px;
    border: 1px solid transparent;
    background-color: blueviolet;
    color: white;
}
li {
    color:black;
}
</style>