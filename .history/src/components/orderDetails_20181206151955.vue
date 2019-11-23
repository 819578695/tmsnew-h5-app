<template>
  <div class="page">
    <van-row class="header-back">
      <van-icon name="arrow-left" class="back" @click="close"/>
      <van-col span="24" align="center">{{$store.state.default.hederContent}}详情</van-col>
    </van-row>
    <van-cell-group class="data">
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="月份" :value="data.months"/>
      <van-cell title="类型" :value="data.trader_type"/>
      <van-cell title="所属子公司" :value="data.company_name"/>
      <van-cell title="总运单票数" :value="data.total"/>
      <van-cell title="运费金额" :value="data.cargo_freight"/>
      <van-cell title="投保金额" :value="data.insurance_mode"/>
      <van-cell title="保费" :value="data.insurance_free"/>
    </van-cell-group>

  </div>
</template>
<script>
export default {
  props:['data'],
  data(){
    return {
     
    }
  },
  mounted(){
    this.$store.commit('changeParame', {headerBack:true,hederContent:'保险报表详情',bottom:'1',bottomShow:false})
  },
  methods:{
    close(){
      this.$emit('close','')
    }
  }
}
</script>
<style lang="less" scoped>
.data{
  .van-cell__value{
    font-size: 12px;
  }
}
  .page{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  table{
    text-align: center;
  }
  thead{
    font-size: 14px;
    font-weight: bold;
  }
  tbody{
    font-size: 12px;
  }
</style>

