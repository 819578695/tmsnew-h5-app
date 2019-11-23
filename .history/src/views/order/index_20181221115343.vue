<template>
    <div >
      <div align="center" style="background-color: #fff;width: 100%;height: 110px;margin-top: 15px;" @click="beginScan(1)">
        <div><span></span></div>
        <div></div>
       <img src="../../assets/images/tm.jpg" alt="" style="width: 40px;height: 30px;float: left;">
      </div>
      <div align="center" style="background-color: #fff;width: 100%;height: 110px;margin-top: 15px;" @click="beginScan(2)">
        <span>点击扫码<b style="color:red">到</b>车</span>
       <img src="../../assets/images/tm.jpg" alt="" style="width: 40px;height: 30px;float: left;">
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
    window.getToAddress = (address='') => {
      this.updateOrderStatus(address);
    }
  },
  mounted(){
    this.$store.commit('changeParame', {headerBack:false,hederContent:'寄收件地址',bottom:'1',bottomShow:true})
  },
  methods:{
    beginScan(type){
      this.type=type;
      this.utils.request.getCamera();
    },
    updateOrderStatus(orderNo){
      this.utils.request.pdaOrderStatusSet({'orderNos':orderNo,'type':this.type},function(data){
          alert('操作成功');
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

</style>
<style>
#app{
  background-color:#F5F5F5
}
</style>
