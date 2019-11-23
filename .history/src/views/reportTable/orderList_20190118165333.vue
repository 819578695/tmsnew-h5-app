<template>
    <div>
      <div align="center" style="padding-top:15px;">
      <van-row id="rows">
        <div style="height:140px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.3) 0px 4px 6px 2px;"  v-for="(item, index) in orderList" :key="index">
          <div style="width:100%;height: 15%;margin-bottom: 30px;padding-top: 15px;">
            <div style="width: 35%;float: left;text-align: left;padding-left: 30px;">
              <span style="color:rgb(30, 131, 255)">{{item.recipient_site}}</span>
            </div>
            <div style="width: 30%;float: right;">
              <span style="color:rgb(30, 131, 255)">{{item.statusval}}</span>
            </div>
          </div>
          <hr style="width: 95%;border: 0.6px solid rgba(128, 128, 128, 0.13);"/>
          <div style="width:100%;height: 30px;"><p style="float: left;width: 40%;color:#808080;font-size: 15px;">收货人：{{item.recipient_user}}</p></div>
          <div style="font-size: 14px;width:90%;height: 30px;">
            <button style="background-color:rgb(240, 238, 242);float: right;border:none;height: 30px;width: 80px;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 6px;" @click="$router.push({name:'orderInfo',query:{id:item.id,type:''}})">查看详情</button>
          </div>
        </div>
      </van-row>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      type:1,
      orderList:[],
      id:this.$route.query.id,
      type:this.$route.query.type
    }
  },
  mounted(){
    this.getOrderList({sign: "qazwsxedc", type: this.type, bizId: this.id});
    this.$store.commit('changeParame', {headerBack:true,hederContent:'配载列表',bottom:'1',bottomShow:false})
  },
  methods:{
    getOrderList(param){
      var this_ = this;
      this.utils.request.stowageOrderList(param, function(data) {
        this_.orderList = data;
      });
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
.black{
  color:#333;
}
.blue{
  color:rgb(30, 131, 255)
}
</style>