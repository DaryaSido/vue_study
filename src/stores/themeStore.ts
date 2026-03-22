import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useThemeStore = defineStore('theme', () => {
    const isDark = ref(false);
    const themeStyles = computed(()=> ({
        header: {
        color: isDark.value ? 'white' : 'blueviolet',
      'background-color': isDark.value ? 'blueviolet' : 'white',
        },
        footer: {
        'background-color': isDark.value ? 'greenyellow' : 'blueviolet',
      color: isDark.value ? 'black' : 'white',
        }
    })
    )

    return {
        isDark, themeStyles
    };
});