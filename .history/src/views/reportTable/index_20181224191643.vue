<template>
    <div>
      <div align="center" style="padding-top:120px;" @click="beginScan(1)">
       <span>点击扫码<b style="color:red">入库</b></span>
       <img src="../../assets/images/tm.jpg" alt="">
      </div>
      <div align="center" style="padding-top:120px;" @click="beginScan(2)">
        <span>点击扫码<b style="color:red">出库</b></span>
       <img src="../../assets/images/tm.jpg" alt="">
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
    this.$store.commit('changeParame', {headerBack:false,hederContent:'扫描条形码',bottom:'1',bottomShow:false})
  },
  methods:{
    beginScan(type){
      this.$router.push({ name: "orderDetails", query: { type:type}});
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