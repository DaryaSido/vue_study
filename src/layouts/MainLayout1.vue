<template>
    <div :class="{dark: isDark}" class="root">
        <HeaderComposition :type="isDark" @theme-switch="switchTheme" :style="switchBack" :change-buttons="changeButtons"/>
      <section class="main" :class="{'dark-theme': isDark, 'light-theme': !isDark}">
        <MainEnteriesComposition/>
       <SidebarComposition :type="isDark"  />
      </section>
        <FooterComposition :style="switchBack"/>
    </div>
</template>

<script setup lang="ts">
import HeaderComposition from './HeaderComposition.vue';
import FooterComposition from './FooterComposition.vue';
import MainEnteriesComposition from './MainEnteriesComposition.vue';
import SidebarComposition from './SidebarComposition.vue';
import { computed, ref, type CSSProperties } from 'vue';

const isDark = ref(false);
//methods
const switchTheme = () => {
    isDark.value =!isDark.value
};
//computed
const changeButtons = computed<CSSProperties>(()=> {
    return {
        'color': isDark.value ? 'white' : 'blueviolet',
        'background-color': isDark.value ? 'blueviolet' : 'white'
    }   
})
const changeCounterTxt = computed<CSSProperties>(()=> {
    return {
        'color': isDark.value ? 'greenyellow' : 'black'
      }
})
const changeCounterBtn = computed<CSSProperties>(()=> {
    return {
        'color': isDark.value ? 'black' : 'white',
        'background-color': isDark.value ? 'greenyellow' : 'blueviolet'
    }
})
const switchBack = computed<CSSProperties>(()=> {
     return {
        'background-color': isDark.value ? 'greenyellow' : 'blueviolet',
        'color': isDark.value ? 'black' : 'white'
      }
})

</script>




<style scoped>
.root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.main {
    padding: 0 36px 0 36px;
    display: flex;
    flex:1;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    /* background: url(https://static.wixstatic.com/media/d20c7a_8bbfbb01298346b9b4c776070becf78a~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d20c7a_8bbfbb01298346b9b4c776070becf78a~mv2.jpg) no-repeat;
    background-size: cover; */
    background-repeat: no-repeat;
    background-size: cover;
   
}
.main.light-theme {
     background: url(https://static.wixstatic.com/media/d20c7a_8bbfbb01298346b9b4c776070becf78a~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d20c7a_8bbfbb01298346b9b4c776070becf78a~mv2.jpg) no-repeat;
     background-size: cover;
}
.main.dark-theme {
     background: url(https://avatars.mds.yandex.net/i?id=d765ee81ac38a484ce1b1c92a96808ca_l-3006166-images-thumbs&n=13) no-repeat;
       background-size: cover;
}
</style>