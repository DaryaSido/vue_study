<template>
  <div>
    <MainLayout1>
      <section class="main" :class="{ 'dark-theme': isDark, 'light-theme': !isDark }">
        <section class="main" :class="{ 'dark-theme': isDark, 'light-theme': !isDark }"></section>
        <MainEnteriesComposition :is-dark="isDark" />
        <SidebarComposition :type="isDark" />
      </section>
    </MainLayout1>
  </div>
</template>

<script setup lang="ts">
import MainLayout1 from '@/layouts/MainLayout1.vue'
import SidebarComposition from '@/layouts/SidebarComposition.vue'
import MainEnteriesComposition from '@/layouts/MainEnteriesComposition.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const isDark = ref(false)
</script>

<style scoped>
.main {
  padding: 0 36px 0 36px;
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  /* background: url(https://static.wixstatic.com/media/d20c7a_8bbfbb01298346b9b4c776070becf78a~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d20c7a_8bbfbb01298346b9b4c776070becf78a~mv2.jpg) no-repeat;
    background-size: cover; */
  background-repeat: no-repeat;
  background-size: cover;
}
.main.light-theme {
  background: url(https://static.wixstatic.com/media/d20c7a_8bbfbb01298346b9b4c776070becf78a~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d20c7a_8bbfbb01298346b9b4c776070becf78a~mv2.jpg)
    no-repeat;
  background-size: cover;
}
.main.dark-theme {
  background: url(https://avatars.mds.yandex.net/i?id=d765ee81ac38a484ce1b1c92a96808ca_l-3006166-images-thumbs&n=13)
    no-repeat;
  background-size: cover;
}
</style>
