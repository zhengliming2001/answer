<template>
    <!-- 分数页面 -->
    <div class="container">
      <!-- 遮罩层 -->
      <div class="mask" v-show="isShare" @click="isShare=false">
        <div class="guide"></div>
      </div>
      <!-- 成绩 -->
      <div class="score">
        <!-- 分数 -->
        <div class="myScoreAndComment">
          <div class="myScore">{{ score }}分!</div>
          <div class="myComment">{{ myComment }}</div>
        </div>
      </div>
      <!-- 分享 -->
      <div class="share" @click="isShare=true"></div>
      <!-- 二维码 -->
      <div class="code">
        <p>关注葡萄之家,获取答案。</p>
        <img src="@/images/4-4.png" alt="" />
      </div>
    </div>
</template>

<script>
export default {
  name: "Score",
  data() {
    return {
      // 是否分享
      isShare:false,
      //分数提示
      scoreTips: "", 
      //所有分数提示的数组
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "牛逼,继续加油哦~",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！",
      ],
    };
  },
  computed: {
    score() {
      return this.$route.params.score;
    },
    myComment() {
      this.scoreTips = this.scoreTipsArr[this.score / 20];
      return this.scoreTips;
    },
  },
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: url(~@/images/4-1.jpg);
  background-repeat: repeat-y;
  background-size: cover;
  overflow: hidden;
  .score {
    width: 70%;
    height: 273px;
    background-image: url(~@/images/4-2.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 50px auto;
    position: relative;
    .myScoreAndComment {
      width: 95%;
      height: 60%;
      position: absolute;
      bottom: 0;
      right: 0;
      .myScore {
        height: 55%;
        line-height: 170%;
        text-align: center;
        font-size: 50px;
        font-weight: bolder;
        color: darkred;
      }
      .myComment {
        text-align: center;
        color: #3e2415;
        font-size: 25px;
        font-weight: bold;
      }
    }
  }
  .share {
    width: 45%;
    height: 70px;
    background-image: url(~@/images/4-3.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-top: 60px;
  }
  .code {
    width: 60%;
    text-align: center;
    font-weight: bold;
    margin: 20px auto;
    img {
      margin-top: 10px;
    }
  }
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-image: url(~@/images/5-1.png);
  .guide {
    width: 85%;
    height: 35%;
    background-image: url(~@/images/5-2.png);
    background-size:100% 100% ;
    margin: 10px auto;
  }
}
</style>