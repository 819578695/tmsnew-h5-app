<template>
  <div>
    <div align="center" style="padding-top:15px;height:50px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);">
      <van-row>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
          <span class="black" :class="{blue:type==1}" @click="getLoadIng(1)">全部</span>
        </van-col>
        <van-col span="8" align="center">
          <span class="black" :class="{blue:type==2}" @click="getLoadIng(2)">运输中</span>
        </van-col>
        <van-col span="8" align="center">
          <span class="black" :class="{blue:type==3}" @click="getLoadIng(3)">已完成</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.$store.commit("changeParame", {
      headerBack: false,
      hederContent: "主页面",
      bottom: "1",
      bottomShow: false
    });
  },
};
</script>
<style lang="less" scoped>
.ewm {
  position: fixed;
  right: 4%;
  top: 12px;
  width: 1.5rem;
}
</style>