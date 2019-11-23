<template>
    <div>
       <img src="http://tiaoma.cnaidc.com/Html/image/tm.jpg" alt="" class="ewm">
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