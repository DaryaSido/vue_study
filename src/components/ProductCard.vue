<template>
    <div class="item">
        <slot name="preppend"/>
        <img :src="$props.product?.img" class="prod-pic" >
        <div class="name">Наименование: {{ $props.product?.name }}</div>
        <div class="label">Производитель: {{$props.product?.label}}</div>
        <div class="cost">Стоимость: {{$props.product?.cost}} руб.</div>
        <slot name="append"/>
        
    </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
interface IProduct {
    name: string,
    label: string,
    cost: number, 
    img: string
}

export default defineComponent({
    props: {
    product: {
        type: Object as PropType<IProduct>,
            default: ()=> ({
            name: "Аксессуар",
            label: "No name",
            cost: 0,
            img: "https://mactime.pro/images/detailed/85/333333_ym7t-xi.jpg"

            } as IProduct)
    }
    }
   
})
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