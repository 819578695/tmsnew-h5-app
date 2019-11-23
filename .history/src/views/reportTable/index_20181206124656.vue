<template>
    <div>
       <img src="../../assets/images/ewm.png" alt="" class="ewm">
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
</style>