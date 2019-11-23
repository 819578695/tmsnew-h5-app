<template>
    <div >
      <div align="center" style="background-color: #fff;width: 100%;height: 110px;margin-top: 15px;" @click="beginScan(1)">
        <div style="color:rgba(84, 86, 87, 0.71);padding-right: 90px;font-size: 16px;position: relative;top: 30px;"><span>*先生</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>13564611247</span></div>
        <div><input placeholder="取件地址" type="text" style="position: relative;top: 40px;right: 20px;color: rgb(110, 110, 110);" value="上海市松江区正广通集团" disabled/></div>
       <img src="../../assets/images/tm.jpg" alt="" style="width: 40px;height: 30px;float: left;margin-left: 20px;">
       <div style="color:blue;cursor: pointer;font-weight: 600;float: right;"><span >输入地址</span></div>
      </div>
      <div align="center" style="background-color: #fff;width: 100%;height: 110px;margin-top: 15px;" @click="beginScan(2)">
        <div style="color:rgba(84, 86, 87, 0.71);padding-right: 90px;font-size: 16px;position: relative;top: 30px;"><span>*先生</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>13564611247</span></div>
        <div><input placeholder="送到哪里" type="text" style="position: relative;top: 40px;right: 20px;color: rgb(110, 110, 110);"/></div>
       <img src="../../assets/images/tm.jpg" alt="" style="width: 40px;height: 30px;float: left; margin-left: 20px;">
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
