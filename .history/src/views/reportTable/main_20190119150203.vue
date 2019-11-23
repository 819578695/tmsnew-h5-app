<template>
  <div>
    <div align="center">
      <van-row>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
        </van-col>
        <van-col span="8" align="center">
        </van-col>
        <van-col span="8" align="center">
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
      headerShow:false,
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