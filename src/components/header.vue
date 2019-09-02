<template>
  <header class="header">
    <h1>
      <a href="/">霜降</a>
    </h1>
    <p class="description">做一个快乐的死肥宅</p>
    <nav class="nav">
      <ul>
        <li :class="{'selected' : curTab === 0}" v-on:click="tabClick(0)">首页</li>
        <li :class="{'selected' : curTab === 1}" v-on:click="tabClick(1)">技术</li>
        <li :class="{'selected' : curTab === 2}" v-on:click="tabClick(2)">生活</li>
      </ul>
    </nav>
    <!-- <div class="clear"></div> -->
  </header>
</template>

<script>
export default {
  name: 'navHeader',
  data() {
    return {
      curTab: 0
    };
  },
  methods: {
    tabClick(tab) {
      this.curTab = tab;
    }
  }
};
</script>

<style lang="scss" scoped>
header::after {
  content: '.';
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}

header {
  margin: 4vw auto 0 auto;
  border-bottom: 1px solid #ddd;

  h1 {
    font-weight: 600;
    font-size: 38px;
    color: #333333;
    margin: 0;
  }

  .description {
    color: #666666;
    font-size: 14px;
    margin-top: 4px;
  }

  .nav {
    float: right;
  }

  li {
    list-style-type: none;
    float: left;
    font-size: 12px;
    width: 80px;
    padding: 10px 0 8px 0;
    text-align: center;
    color: #333;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  .selected {
    border: 1px solid #ddd;
    border-bottom-color: white;
  }
}
</style>
