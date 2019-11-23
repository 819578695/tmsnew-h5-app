<template>
  <div>
    <div align="center" style="padding-top: 30px;">
      <van-row>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
          <img src="../../assets/images/t1.png"/>
        </van-col>
        <van-col span="8" align="center">
          <img src="../../assets/images/t2.png"/>
        </van-col>
        <van-col span="8" align="center">
          <img src="../../assets/images/t3.png"/>
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
      headerShow:true,
      headerBack: false,
      hederContent: "运输管理",
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