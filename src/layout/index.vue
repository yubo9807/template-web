<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    <footer>
      footer
    </footer>
  </div>
</template>

<script lang="ts">
import Header from './header/index.vue'
export default {
  components: {
    Header,
  }
}
</script>