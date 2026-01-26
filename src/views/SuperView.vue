<template>
  <div :class="{ dark: isDark }" class="page">
    <HeaderSuperView @theme-switch="switchTheme" :style="switchBack" :change-buttons="changeButtons" />
    <section class="main">
      <MainEnteriesSuperView />
      <SidebarSuperView />
    </section>
    <FooterSuperView :style="switchBack" />
  </div>
</template>

<script lang="ts">
import HeaderSuperView from '@/components/HeaderSuperView.vue'
import { defineComponent, type CSSProperties } from 'vue'
import SidebarSuperView from '@/components/SidebarSuperView.vue'
import FooterSuperView from '@/components/FooterSuperView.vue'
import MainEnteriesSuperView from '@/components/MainEnteriesSuperView.vue'

export default defineComponent({
  data() {
    return {
      isDark: false,
    }
  },
  components: { HeaderSuperView, SidebarSuperView, FooterSuperView, MainEnteriesSuperView },
  methods: {
    switchTheme() {
      this.isDark = !this.isDark
    },
  },
  computed: {
    switchBack(): CSSProperties {
      return {
        'background-color': this.isDark ? 'greenyellow' : 'blueviolet',
        'color': this.isDark ? 'black' : 'white'
      }
    },
    changeButtons(): CSSProperties {
      return {
        'color': this.isDark ? 'white' : 'blueviolet',
        'background-color': this.isDark ? 'blueviolet' : 'white'
      }
    },
    changeCounterTxt(): CSSProperties {
      return {
        'color': this.isDark ? 'greenyellow' : 'black'
      }
    },
    changeCounterBtn(): CSSProperties {
      return {
        'color': this.isDark ? 'black' : 'white',
        'background-color': this.isDark ? 'greenyellow' : 'blueviolet'
      }
    }
  }
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
  justify-content: space-evenly;
}
.light {
  background-color: white;
  color: black;
}
.dark {
  background-color: black;
  color: white;
}
</style>
