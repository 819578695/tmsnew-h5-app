<template>
  <div>
    <div @click="$router.push({name:'orderInfo',query:{id:1}})"><img style='width:40px;height:40px;float: right;transform: translate(-15px,-44px);' src="../../assets/images/ewm.png"/></div>
    <div align="center" style="padding-top: 40px;">
      <van-row>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255);">
          <div style="
    position: absolute;
    color: rgb(255, 255, 255);
    z-index: 99;
    font-size: 1.2em;
    background-color: red;
    width: 1.1em;
    height: 1.1em;
    left: 86%;
    text-align: center;
    border-radius: 2.75em;">1</div>
          <img src="../../assets/images/t1.png" @click="$router.push({name:'pickup'})"/>
          <div @click="$router.push({name:'pickup'})">提货配载单</div>
        </van-col>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
          <img src="../../assets/images/t2.png"  @click="$router.push({name:'reporting'})"/>
          <div  @click="$router.push({name:'reporting'})">干线配载单</div>
        </van-col>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
          <img src="../../assets/images/t3.png" @click="$router.push({name:'deliver'})"/>
          <div @click="$router.push({name:'deliver'})">送货配载单</div>
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