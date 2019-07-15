<template>
  <div class="home">
    <navHeader />
  </div>
</template>

<style scoped>
</style>

<script>
// @ is an alias to /src
import navHeader from '@/components/header.vue'

export default {
  name: 'home',
  components: {
    navHeader
  }
}
</script>
