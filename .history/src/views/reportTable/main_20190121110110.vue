<template>
  <div>
    <div @click="$router.push({name:'orderInfo',query:{id:1}})"><img style='width:36px;height:36px;float: right;transform: translate(-15px,-42px);' src="../../assets/images/ewm.png"/></div>
    <div align="center" style="padding-top: 40px;">
      <van-row>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255);">
          <div style="
    position: absolute;
    color: rgb(255, 255, 255);
    z-index: 99;
    font-size: 1.2em;
    background-color: red;
    width: 24px;
    height: 24px;
    left: 19%;
    text-align: center;
    border-radius: 2.75em;">{{queryVehicleListCount}}</div>
          <img src="../../assets/images/t1.png" @click="$router.push({name:'pickup'})"/>
          <div @click="$router.push({name:'pickup'})">提货配载单</div>
        </van-col>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
                    <div style="
    position: absolute;
    color: rgb(255, 255, 255);
    z-index: 99;
    font-size: 1.2em;
    background-color: red;
    width: 24px;
    height: 24px;
    left:53%;
    text-align: center;
    border-radius: 2.75em;">{{queryVehicleListCount}}</div>
          <img src="../../assets/images/t2.png"  @click="$router.push({name:'reporting'})"/>
          <div  @click="$router.push({name:'reporting'})">干线配载单</div>
        </van-col>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
                    <div style="
    position: absolute;
    color: rgb(255, 255, 255);
    z-index: 99;
    font-size: 1.2em;
    background-color: red;
    width: 24px;
    height: 24px;
    left: 88%;
    text-align: center;
    border-radius: 2.75em;">{{deliverCount}}</div>
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
      deliverCount:0,
      queryPickupListCount:0,
      queryVehicleListCount:0
    };
  },
   created(){
    var this_=this;
    window.getToAddress = (address='') => {
      if(null!=address){
        //   var last=address.substr(index,address.length);
          //var barcode=last.substr(0,last.indexOf('bar'));
          var barcode=address;
          this.utils.request.queryOrderByDriver({'order_no':barcode,'driver_id':localStorage.getItem('id')},function(data){
            this_.dataRequest=data;
            this_.checkPsdShow=true;
         });
      }
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
    this.isLogin = localStorage.getItem('isLogin')
    if(this.isLogin != 'true' || this.isLogin == null){
      this.$router.push({ name: 'login' });
    }else{
      this.$store.commit('login')
    }
    this.utils.request.queryShippingByDriver({'driver_id':localStorage.getItem('id')},function(data){
        this_.dataRequest=data;
        this_.checkPsdShow=true;
    });
  },
  methods:{
    getBeCode (){
      var this_=this;
      this.utils.request.getCamera(type);
    }
  }
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