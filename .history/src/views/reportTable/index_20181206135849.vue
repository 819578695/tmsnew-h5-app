<template>
    <div>
      <div align="center" style="padding-top:120px;">
       <span>点击扫码发车</span>
       <img src="../../assets/images/tm.jpg" alt="">
      </div>
      <div align="center" style="padding-top:120px;">
        <span>点击扫码到车</span>
       <img src="../../assets/images/tm.jpg" alt="">
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  mounted(){
      this.$store.commit('changeParame', {headerBack:false,hederContent:'扫描条形码',bottom:'1',bottomShow:true})
  },
  methods:{
    toggleDate(){
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