<template>
  <div class="page">
    <HeaderSuperView />
    <section class="main">
      <MainEnteriesSuperView />
      <SidebarSuperView />
    </section>
    <FooterSuperView />
  </div>
</template>

<script lang="ts">
import HeaderSuperView from '@/components/HeaderSuperView.vue'
import { defineComponent } from 'vue'
import SidebarSuperView from '@/components/SidebarSuperView.vue'
import FooterSuperView from '@/components/FooterSuperView.vue'
import MainEnteriesSuperView from '@/components/MainEnteriesSuperView.vue'

export default defineComponent({
  components: { HeaderSuperView, SidebarSuperView, FooterSuperView, MainEnteriesSuperView },
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
section {
  min-height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
