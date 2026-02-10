<template>
  <div class="main_info">
    <h1>Страница подсчета кликов</h1>
    <div class="descr">Налетай, не скупись, кликать торопись!</div>
    <ClickCounterComposition 
    title="Жмякай на кнопку" 
    @decrement="(event)=>{console.log(event)}"/>
    <!-- <ClickCounter :style="changeCounterTxt" :changeCounterBtn="changeCounterBtn"/> -->
     
    
    <h2>Не забудь купить:</h2>
<section class="prod-items">
    <ProductCard :product=" {
      name: 'Компьютерная мышь',
      label: 'Xiaomi',
      cost: 1500,
      img: 'https://gift-market.imgix.net/vfA96WSIDy.png'

    }"/>
     <ProductCardComposition :is-dark="isDark" :product=" {
      img: 'https://avatars.mds.yandex.net/get-mpic/12719412/2a00000196101e291c098af1ada612be4c66/orig',
      name: 'Коврик для мыши',
      label: 'Ardor',
      cost: 700,
    }">
    <template #preppend>
      <div class="disclaimer">Осталось мало</div>
    </template>
    <template #append>
    <div class="disclaimer">Внимание! Изображение на коврике может отличаться</div>
    </template>
     </ProductCardComposition>
    <ProductCardComposition :is-dark="isDark" :product=" {
      name: 'Компьютерная мышь',
      label: 'JOMAA',
      cost: 1350,
      img: 'https://avatars.mds.yandex.net/get-mpic/13532112/2a00000198171c305af7ccbaa6460ecbeee7/orig'

    }">
    <template #preppend>
      <div class="advantages">
        Сохраняет естественное положение руки
      </div>
    </template>
    </ProductCardComposition>
    </section>
  </div>
</template>

<script setup lang="ts">
import ClickCounterComposition from './ClickCounterComposition.vue';
import ProductCardComposition from './ProductCardComposition.vue';

//props
defineProps<{
  isDark?: boolean;
}>();



</script>

<style scoped>
.main_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.descr {
  display: block;
  font-size: 24px;
  font-style: italic;
  color: blueviolet;
}
h1 {
    color: blueviolet;
}
.prod-items {
  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
}
.disclaimer {
  font-size: 8px;
  font-weight: 600;
  color: crimson;
}
.advantages {
  font-size: 8px;
  font-weight: 600;
  color: green;
}
</style>
