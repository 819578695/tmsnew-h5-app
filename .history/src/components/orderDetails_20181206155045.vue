<template>
  <div class="page">
    <van-row class="header-back">
      <van-icon name="arrow-left" class="back" @click="close"/>
      <van-col span="24" align="center">{{$store.state.default.hederContent}}详情</van-col>
    </van-row>
    <van-cell-group class="data">
      <van-cell title="是否特殊物品" :value="data.trader_name" />
      <van-cell title="箱号" :value="data.trader_name" />
      <van-cell title="应收金额" :value="data.trader_name" />
      <van-cell title="付款方式" :value="data.trader_name" />
      <van-cell title="重量" :value="data.months"/>
      <van-cell title="业务类别" :value="data.trader_type"/>
      <van-cell title="体积" :value="data.company_name"/>

      <van-cell title="指定取货时间" :value="data.total"/>
      <van-cell title="发件人" :value="data.cargo_freight"/>
      <van-cell title="发件人电话" :value="data.insurance_mode"/>
      <van-cell title="发件人手机" :value="data.insurance_free"/>
      <van-cell title="发件人邮箱" :value="data.trader_name" />
      <van-cell title="取件地址" :value="data.trader_name" />
      <van-cell title="发件人备注" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
      <van-cell title="加盟商名称" :value="data.trader_name" />
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
    this.$store.commit('changeParame', {headerBack:true,hederContent:'订单详情',bottom:'1',bottomShow:false})
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

