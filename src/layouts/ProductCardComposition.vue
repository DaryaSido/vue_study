<template>
    <div class="item">
        <slot name="preppend"/>
        <img :src="$props.product?.img" class="prod-pic" >
        <div class="name">Наименование: {{ product.name }}</div>
        <div class="label">Производитель: {{product.label}}</div>
        <div class="cost">Стоимость: {{product.cost}} руб.</div>
        <slot name="append"/>
        
    </div>
</template>

<script setup lang="ts">
import { defaultProduct } from './constants' 
import type { IProductCard } from './types';
import ProductCard from '@/components/ProductCard.vue';
const props = withDefaults(defineProps<IProductCard>(), {
    product:() => defaultProduct
} )
</script>

<style scoped>
.item {
    padding: 20px;
    height: 300px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid blueviolet;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;

}
.prod-pic {
    width: auto;
    max-height: 150px;
}
.name, .label, .cost {
    font-size: 10px;
    font-weight: 500;
}
</style>