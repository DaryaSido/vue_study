<template>
    <div class="root">
        <HeaderComposition/>
        <FooterComposition/>
    </div>
</template>

<script setup lang="ts">
import HeaderComposition from './HeaderComposition.vue';
import FooterComposition from './FooterComposition.vue';


</script>

<style scoped>
.root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>