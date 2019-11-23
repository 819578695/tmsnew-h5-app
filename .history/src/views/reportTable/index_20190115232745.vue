<template>
    <div>
      <div align="center" style="padding-top:80px;" @click="beginScan(1)">
      <van-row class="header-back">
        <van-col span="24" align="center">{{$store.state.default.hederContent}}</van-col>
      </van-row>
        <span>全部</span>
        <span>运输中</span>
        <span>已完成</span>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      type:'',
      orderNo:''
    }
  },
  created(){
    var this_=this;
  },
  mounted(){
    this.$store.commit('changeParame', {headerBack:true,hederContent:'干线配载单',bottom:'1',bottomShow:false})
  },
  methods:{
    beginScan(type){
      if(type==1){
        this.$router.push({ name: "orderDetailsPut", query: { type:1}});
      }else{
        this.$router.push({ name: "orderDetailsOut", query: { type:2}});
      }
    },
    outLogin(){
      localStorage.removeItem("isLogin");
      localStorage.removeItem("siteId");
      localStorage.removeItem("token");
      this.$router.push({ name: "login"});
    }
  }
}
</script>
<style lang="less" scoped>
  .ewm{
  position: fixed;
  right: 4%;
  top: 12px;
  width: 1.5rem;
}
</style>