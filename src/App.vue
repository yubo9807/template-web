<template>
  <router-view />
</template>

<script lang="ts" setup>
import useStoreVariable from './store/variable';

const storeVariable = useStoreVariable();
storeVariable.init();
</script>