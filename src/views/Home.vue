<template>
  <div class="home">
    <navHeader />
    <article class="article" v-for="article in articles" :key="article.articleId">
      <router-link class="title" to="/article">{{article.title}}</router-link>
      <div class="time">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-rili1" />
        </svg>
        <span>{{article.time}}</span>
      </div>
      <section class="summary">{{article.summary}}</section>
      <router-link to="/article" class="see-all">
        <span>阅读全文</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jinru" />
        </svg>
      </router-link>
    </article>
  </div>
</template>

<style scoped>
</style>

<script>
// @ is an alias to /src
import navHeader from '@/components/header.vue';
import { formatStr } from '@/utils/dateUtil.js';

export default {
  name: 'home',
  components: {
    navHeader
  },
  data() {
    return {
      articles: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init: function() {
      let article = {
        title: '双城故事II',
        summary:
          '作为一个工作单位在深圳，却长期寄居北京的社畜，这两座城市迥然的差异时常让我感到有点人格分裂。尽管都是一线大都市，但它们拥有着完全不同的气质，并且生活得越久，体会得越深。一个终年多雨气候湿润，依山傍水环境宜人，发展飞快节奏变态，难耐的酷暑也挡不住年轻的劳动力们每天像打了鸡血一般；另一个四季分明天干物燥，夏天桑拿冬日雾霾，但仅凭短暂却清爽的春秋时节，又让人恨不起来。',
        time: formatStr('2019-08-28', 'yyyy年MM月dd日')
      };
      this.articles.push(article);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 70vw;
  margin: 0 auto;
}

.article-lay {
  margin-top: 20px;
}

.article {
  padding-top: 25px;
}
.title {
  color: #333333;
  font-size: 24px;
  font-weight: 600;
}

.time {
  font-size: 14px;
  color: #999999;
  margin: 15px 0;
  svg {
    margin-right: 4px;
  }
}

.summary {
  font-size: 15px;
  color: #444444;
  line-height: 1.6;
  text-align: justify;
  word-break: normal;
}

.see-all {
  float: right;
  color: #444444;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 5px 10px;
  margin-top: 4px;
  line-height: 100%;

  span {
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5vw;
  }

  svg {
    width: 8px;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
