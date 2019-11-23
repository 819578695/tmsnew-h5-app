<template>
  <div class="page1">
    <van-row class="bg" type="flex" justify="center" style="border-bottom:1px solid #ccc;">
       <div>
        <van-col span="24" align="center">
          <input type="text" v-model="searchValue" placeholder="点击搜索公司名称" @change="getLoadOrder(searchValue)">
        </van-col>
      </div>
    </van-row>
    <van-row class="tHead">
      <van-col span="3" align="center">类型</van-col>
      <van-col span="3" align="center">需提货</van-col>
      <van-col span="4" align="center">委托人</van-col>
      <van-col span="4" align="center">收件人</van-col>
      <van-col span="4" align="center">特殊物品</van-col>
      <van-col span="3" align="center">金额</van-col>
      <van-col span="3" align="center">状态</van-col>
      <!-- <p>序列公司名称月份新增合同数作废合同数合同总数</p> -->
    </van-row>
    <van-row>
      <ul waterfall-disabled="disabled"
          waterfall-offset="200"
          class="tBody">
        <li  @click="toggleDetails(orderData.id)">
          <van-col span="3" align="center">{{orderData.businesstype}}</van-col>
          <van-col span="3" align="center" v-if="null!=orderData.is_pick_up_parts && orderData.is_pick_up_parts==0">
            否
          </van-col>
          <van-col span="3" align="center" v-if="null!=orderData.is_pick_up_parts && orderData.is_pick_up_parts!=0">
            是
          </van-col>
          <van-col span="4" align="center">{{orderData.consignuser}}</van-col>
          <van-col span="4" align="center">{{orderData.recipientuser}}</van-col>
          <van-col span="4" align="center">{{orderData.site_name}}</van-col>
          <van-col span="3" align="center">{{orderData.receive_amoount}}</van-col>
          <van-col span="3" align="center">{{orderData.statusval}}</van-col>
        </li>
      </ul>
       <div class="tfoot">
        <van-col span="4" align="center"><b>合计</b></van-col>
        <van-col span="6" align="center"><b>新增：</b>{{addNum}}</van-col>
        <van-col span="6" align="center"><b>作废：</b>{{delNum}}</van-col>
        <van-col span="8" align="center"><b>总数：</b>{{totalNum}}</van-col>
      </div>
    </van-row>
      <orderDetails v-show="details.show" @close="toggleDetails" :data='details.paremes'></orderDetails>
  </div>
</template>
<script>
import { Waterfall } from 'vant';
import orderDetails from '../components/orderDetails'
export default {
  components:{
    orderDetails
  },
  data(){
    return {
      actionShow: false,
      orderData:{},
      dataList:[],
      count:0,
      disabled: false,
      addNum:0,
      delNum:0,
      totalNum:0,
      searchValue: '',
      details:{
        show:false,
        paremes:{
          id:''
        }
      }
    }
  },
  directives: {
    WaterfallLower: Waterfall('lower')
  },
  mounted(){
    var this_=this;
    this.$store.commit('changeParame', {headerBack:true,hederContent:'运单查询',bottom:'0',bottomShow:false})
  },
  methods:{
    getLoadOrder (val){
      var this_=this;
      this.utils.request.queryOrderInfoByNo({'order_no':'O201810211125030010'},function(data){
        this_.orderData=data;
      });
    },
    toggleDetails(p){
      //传递参数用
      if(p){
        this.utils.request.getQueryList({'t':'order','id':p},function(data){
          debugger
        });
        this.details.paremes=this.orderData;
      }
      this.details.show = (this.details.show) ? false : true
    }
  }
}
</script>
<style lang="less" scoped>
.bg input::placeholder{
  color: #fff;
}
.tHead{
  height: 2rem;
  line-height: 2rem;
  font-size: 12px;
  font-weight: bold;
}
.tBody{
  position: fixed;
  left: 0;
  width:100%;
  height: calc(100% - 13rem);
  overflow: auto;
  li{
    font-size: 12px;
    overflow: hidden;
    height: 30px;
    line-height: 30px;
    &:nth-child(odd){
      margin-bottom: 2px;
      background-color: #efefef;
    }
    div{
      white-space: nowrap;
      overflow: auto;
    }
  }
}
.tfoot{
  position: fixed;
  // bottom:3rem;
  bottom:0rem;
  left: 0;
  width: 100%;
  font-size: 14px;
  height: 3rem;
  line-height: 3rem;
  border-top: 1px solid #ccc;
  div{
    overflow: auto;
    white-space: nowrap;
  }
}
.page1{
  position:fixed;
  top: 3rem;
  width: 100%;
  height: calc(100% - 6rem);
}
.dateSelect{
  position: fixed;
  left: 0;
  top: 8rem;
  width: 100%;
}
</style>
