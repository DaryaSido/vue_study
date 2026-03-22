import { $api } from "@/api";
import type { IUser } from "@/layouts/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('users', ()  => {
const usersList = ref<IUser[]>([]);
const user = ref<IUser>({} as IUser);
const isLoading = ref(false);
const isError = ref(false);
const fetchUsers= async ()=>{
    try{
        isLoading.value = true;
        isError.value = false;
        const { data } = await $api.get('/users')
        usersList.value=data;
        console.log(data);
    } catch(err: unknown){
        isError.value=true;
    }finally{
        isLoading.value=false;
    }
}
const fetchUser= async (id:number)=>{
    try{
        isLoading.value = true;
        isError.value = false;
        const { data } = await $api.get(`/users/${id}`)
        user.value=data;
        console.log(data);
    } catch(err: unknown){
        isError.value=true;
    }finally{
        isLoading.value=false;
    }
}
return {
    usersList, user, isLoading, isError, fetchUsers, fetchUser
}
});