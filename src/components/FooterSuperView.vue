<template>
 <div class="cit">
    <div><blockquote>Будьте реалистами - требуйте невозможненького</blockquote></div>
    <div><cite> Че Геварушка</cite></div>
  </div>
 
</template>

<script lang="ts">
import { defineComponent, type CSSProperties, type PropType } from 'vue'

export default defineComponent({
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  switchBack: {
      type: Object as PropType<CSSProperties>,
        default: ()=>({})
    }
})
</script>

<style scoped>
.footer-container {
  height: 70px;
  background-color: blueviolet;
}
.cit {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
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
