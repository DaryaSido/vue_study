<template>
  <div class="root">
    <header class="header">Заголовок</header>
    <section class="content">
      <h1 :style="{ color: isMainPageTitleGreen ? 'green' : 'black' }">Main Page</h1>
      <ClickCounter @decrement="decrementHandler" :title="$options.title" />
    </section>
    <footer class="footer">Подвал {{ new Date().getFullYear() }}</footer>
  </div>
</template>

<script lang="ts">
import ClickCounter from '@/components/ClickCounter.vue'
import { transform } from 'typescript'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestComponent',
  components: { ClickCounter },
  data() {
    return {
      isMainPageTitleGreen: false,
    }
  },
  title: 'Our title',
  methods: {
    decrementHandler(event: number) {
      this.isMainPageTitleGreen = event < -5 ? true : false
      console.log('decrementHandler', event)
    },
  },
})
</script>

<style scoped>
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  flex-grow: 1;
  padding: 10px;
}
.header,
.footer {
  height: 100px;
  background-color: aqua;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
