<template>
    <div>Name: {{ product.name }}</div>
    <div>Label: {{ product.label }}</div>
    <div>Cost: {{ product.cost }}</div>
    <!-- <div>{{ product.img }}</div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';

const product = ref({
name: 'Компь.тер',
label: 'Honor',
cost: 50000,
// img: 'https://avatars.mds.yandex.net/get-mpic/13527901/2a00000196cee372fd14e7032ba30e28c9f3/orig'
})
</script>

<style scoped>

</style>