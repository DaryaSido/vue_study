<template>
  <div class="header">
    <div class="head">Здесь будет логотип и номер телефона, но я пока не придумала</div>
    <div class="button"><button @click="switchTheme" class="switcher" :style="changeButtons">Сменить тему</button></div>
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
    switchBack: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    },
    changeButtons: {
      type: Object as PropType<CSSProperties>,
        default: () => ({})
    }
  },
 
  emits: ['theme-switch'],
  methods: {
    switchTheme() {
      this.$emit('theme-switch')
    },
  },
})
</script>

<style scoped>
.header {
  height: 70px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3 1fr);
  align-content: space-around;
  font-size: 30px;
  color: white;
  background-color: blueviolet;
}

.head {
  grid-column: 3;
  align-items: center;
}
.button {
  grid-column: 4;
}
/* .switcher:hover {
  background-color: rgb(76, 18, 131);
  color: rgb(255, 255, 255);
} */

.switcher {
  /* grid-column: 4; */
  background-color: white;
  border: 1px solid blueviolet;
  padding: 7px;
  font-size: 15px;
  font-weight: 600;
  color: blueviolet;
  border-radius: 5px;
}
</style>
