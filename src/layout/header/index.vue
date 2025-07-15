<template>
  <header>
    haerder
    <button @click="storeVariable.setTheme('OS')">OS</button>
    <button @click="storeVariable.setTheme('light')">light</button>
    <button @click="storeVariable.setTheme('dark')">theme</button>
  </header>
</template>

<script lang="ts" setup>
import useStoreVariable from '@/store/variable';

const storeVariable = useStoreVariable();

</script>