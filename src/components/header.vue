<template>
  <header>
    <h1>
      <a href="/">霜降之原</a>
    </h1>
    <nav>
      <ul>
        <li>技术</li>
        <li>生活</li>
        <li>游戏</li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  height: 56px;
  width: 100vw;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  position: fixed;
  background-color: white;

  h1 {
    font-weight: 600;
    font-size: 2.4vw;
    padding: 0 2vw;
    color: #333333;
    letter-spacing: 0.5vw;
  }

  ul {
    height: 100%;
    border-left: 1px solid #eeeeee;
    display: flex;
    align-items: center;

    li {
      list-style-type: none;
      float: left;
      padding: 0 2vw;
      font-size: 1.6vw;
      color: #666666;
    }

    :not(:nth-last-child(1)) {
      border-right: 1px solid #eeeeee;
    }
  }
}
</style>
<script>
export default {
  name: 'navHeader'
}
</script>
