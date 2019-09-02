<template>
  <div class="home">
    <navHeader />
  </div>
</template>
<script>
import navHeader from '@/components/header.vue';

export default {
  components: {
    navHeader
  },
  data() {
    return {
      article: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 70vw;
  margin: 0 auto;
}
</style>
