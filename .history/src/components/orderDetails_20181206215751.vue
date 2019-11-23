<template>
  <div class="page">
    <van-row class="header-back">
      <van-icon name="arrow-left" class="back" @click="close"/>
      <van-col span="24" align="center">{{$store.state.default.hederContent}}详情</van-col>
    </van-row>
    <div class="support"></div>
    <van-cell-group class="data">
      <van-cell title="是否特殊物品" :value="data.box_no" />
      <van-cell title="箱号" value="" />
      <van-cell title="应收金额" value="" />
      <van-cell title="付款方式" value="" />
      <van-cell title="重量" value=""/>
      <van-cell title="业务类别" value=""/>
      <van-cell title="体积" value=""/>

      <van-cell title="指定取货时间" value=""/>
      <van-cell title="发件人" value=""/>
      <van-cell title="发件人电话" value=""/>
      <van-cell title="发件人手机" value=""/>
      <van-cell title="发件人邮箱" value="" />
      <van-cell title="取件地址" value="" />
      <van-cell title="发件人备注" value="" />

      <van-cell title="指定收件时间" value="" />
      <van-cell title="收件人" value="" />
      <van-cell title="收件人电话" value="" />
      <van-cell title="收件人手机" value="" />
      <van-cell title="收件人邮箱" value="" />
      <van-cell title="收件地址" value="" />
      <van-cell title="收件人备注" value="" />
    </van-cell-group>

      <div class="page12">
    <van-row class="tHead">
      <van-col span="3" align="center">类型</van-col>
      <van-col span="3" align="center">箱号</van-col>
      <van-col span="4" align="center">委托人</van-col>
      <van-col span="4" align="center">收件人</van-col>
      <van-col span="4" align="center">站点名称</van-col>
      <van-col span="3" align="center">金额</van-col>
      <van-col span="3" align="center">状态</van-col>
      <!-- <p>序列公司名称月份新增合同数作废合同数合同总数</p> -->
    </van-row>
    <van-row>
      <ul waterfall-disabled="disabled"
          waterfall-offset="200"
          class="tBody">
        <li>
          <van-col span="3" align="center">{{orderData.businesstype}}</van-col>
          <van-col span="3" align="center">{{orderData.box_no}}</van-col>
          <van-col span="4" align="center">{{orderData.consignuser}}</van-col>
          <van-col span="4" align="center">{{orderData.recipientuser}}</van-col>
          <van-col span="4" align="center">{{orderData.site_name}}</van-col>
          <van-col span="3" align="center">{{orderData.receive_amoount}}</van-col>
          <van-col span="3" align="center">{{orderData.statusval}}</van-col>
        </li>
      </ul>
    </van-row>
  </div>
  </div>
</template>
<script>
export default {
  props:['data'],
  data(){
    return {
      orderData:{}
    }
  },
  mounted(){
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
  height: 100%;
  overflow:auto
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

