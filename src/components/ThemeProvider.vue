<template>
  <ThemeProviderContext.Provider :value="contextValue">
    <slot />
  </ThemeProviderContext.Provider>
</template>

<script setup>
import { inject, onBeforeUnmount, onMounted, provide, ref } from 'vue';

const ThemeProviderContext = Symbol('ThemeProviderContext');

const props = defineProps(['defaultTheme', 'storageKey']);

const theme = ref(localStorage.getItem(props.storageKey) || props.defaultTheme);

const setTheme = (theme) => {
  localStorage.setItem(props.storageKey, theme);
  theme.value = theme;
};

const contextValue = {
  theme: theme.value,
  setTheme,
};

const updateThemeClass = () => {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');

  if (theme.value === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';

    root.classList.add(systemTheme);
    return;
  }

  root.classList.add(theme.value);
};

onMounted(() => {
  updateThemeClass();
});

onBeforeUnmount(() => {
  // Cleanup logic, if needed
});

provide(ThemeProviderContext, contextValue);
</script>