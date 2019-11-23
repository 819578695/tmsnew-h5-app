<template>
    <div>
      <div align="center" style="padding-top:15px;height:50px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);">
      <van-row>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)" @click="beginScan(1)">全部</van-col>
        <van-col span="8" align="center" @click="beginScan(2)">运输中</van-col>
        <van-col span="8" align="center" @click="beginScan(3)">已完成</van-col>
      </van-row>
      <van-row style="padding-top:25px;">
        <div style="height:200px;background-color:red;width:95%;margin-bottom:15px;">
          <div style="width: 60%;float: right;">
            <span>乌鲁木齐网点</span><span> → </span><span>济南网点</span>
          </div>
          <div style="width: 30%;float: right;">
            <span>待发运</span>
          </div>
        </div>
        <div style="height:200px;background-color:red;width:95%;margin-bottom:15px;">

        </div>
        <div style="height:200px;background-color:red;width:95%;margin-bottom:15px;">

        </div>
        <div style="height:200px;background-color:red;width:95%;margin-bottom:15px;">

        </div>
      </van-row>
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