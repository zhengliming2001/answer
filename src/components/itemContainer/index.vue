<template>
  <div>
    <!-- 样式,除了分数界面没有 -->

    <div class="week">
      <div class="weekFont">{{ weekFont }}</div>
    </div>

    <!-- 主页样式 -->
    <div class="home" v-if="current == 'home'">
      <!-- 标语 -->
      <div class="hint"></div>
      <!-- 开始按钮 -->
      <div class="start">
        <router-link to="/item"></router-link>
      </div>
    </div>

    <!-- 答题页面 -->
    <div class="item" v-else-if="current == 'item'">
      <!-- 线圈图 -->
      <div class="line">
        <!-- 答题内容 -->
        <div class="topic">
          <!-- 题目 -->
          <h3>{{ title }}</h3>
          <!-- 选项 -->
          <ul>
            <li
              v-for="(item, index) in data.topic_answer"
              :key="item.topic_answer_id"
            >
              <span
                class="letter"
                @click="changeIt(item, data.topic_answer)"
                :class="{ current: item.isCurrent }"
                >{{
                  index == 0 ? "A" : index == 1 ? "B" : index == 2 ? "C" : "D"
                }}</span
              >
              <span class="content">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 下一题按钮 -->
      <div class="start" @click="nextTopic" :class="{ sub: num == 4 }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemContainer",
  props: ["current"],
  data() {
    return {
      // 当前第几题
      num: 0,
      // 数据
      data: [],
      score: 0,
      // 当前选项
      select:{}
    };
  },
  computed: {
    weekFont() {
      return this.$route.path == "/" ? "第一周" : `题目${this.num+1}`;
    },
    // 题目
    title() {
      return this.data.topic_name;
    },
  },
  watch: {
    num: {
      immediate: true,
      handler(value) {
        this.data = this.$store.state.item.data[value];
        // 页面挂载为选项添加新的属性
        this.data.topic_answer.forEach((item) => {
          this.$set(item, "isCurrent", false);
        });
      },
    },
  },
  methods: {
    // 选择答案
    changeIt(item, allItem) {
      allItem.forEach((item2) => {
        item2.isCurrent = false;
      });
      item.isCurrent = true;
      // 将选中的选项放进响应式数据
      this.select=item;
    },
    // 下一题
    nextTopic() {
      // 判断用户选没选题
      const result = this.data.topic_answer.some((item) => {
        return item.isCurrent == true;
      });
      if (result) {
        // 判断选项是否正确
        this.select.is_standard_answer==1?this.score+=20:this.score+=0;
        // 切换下一题
        if (this.num == 4) {
          // 跳转路由到分数页面
          this.$router.replace({ name: "score",params:{score:this.score}});
        } else {
          this.num++;
        }
      } else {
        alert("您还没有选择答案哦！");
      }
    },
  },
};
</script>

<style lang='less'>
.week {
  width: 70px;
  height: 147px;
  background-image: url(~@/images/WechatIMG2.png);
  background-size: cover;
  position: absolute;
  top: 0;
  right: 30px;
  .weekFont {
    width: 60%;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    color: #a57c50;
    position: absolute;
    top: 76%;
    left: 23%;
  }
}

.home {
  overflow: hidden;
  .hint {
    width: 264px;
    height: 233px;
    background-image: url(~@/images/1-2.png);
    background-size: cover;
    margin: 0 auto;
    margin-top: 100px;
  }
  .start {
    width: 86px;
    height: 43px;
    background-image: url(~@/images/1-4.png);
    background-size: cover;
    margin: 120px auto;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.item {
  overflow: hidden;
  .line {
    width: 396px;
    height: 350px;
    background-image: url(~@/images/2-1.png);
    background-size: cover;
    background-position: center center;
    margin: 0 auto;
    margin-top: 100px;
    position: relative;
    .topic {
      width: 60%;
      height: 180px;
      position: absolute;
      top: 70px;
      left: 80px;
      font-size: 14px;
      font-weight: bold;
      h3 {
        color: rgb(238, 98, 238);
        margin-bottom: 15px;
      }
      ul {
        li {
          display: flex;
          margin: 10px 0;
          span {
            color: rgb(238, 98, 238);
            font-weight: bold;
          }
          .letter {
            width: 20px;
            height: 20px;
            line-height: 20px;
            border-radius: 50%;
            border: 1px solid #fff;
            text-align: center;
            margin-right: 15px;
            cursor: pointer;
          }
          .current {
            background: yellow;
            color: #333;
          }
        }
      }
    }
  }
  .start {
    width: 86px;
    height: 43px;
    background-image: url(~@/images/2-2.png);
    background-size: cover;
    margin: 50px auto;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .sub {
    background-image: url(~@/images/3-1.png);
  }
}
</style>