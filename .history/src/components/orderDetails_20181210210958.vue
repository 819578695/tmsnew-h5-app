<template>
  <div class="page1" style="margin-top: -96px;">
    <van-row class="header-back">
      <van-icon name="arrow-left" class="back" @click="close"/>
      <van-col span="24" align="center">{{$store.state.default.hederContent}}详情</van-col>
    </van-row>
      <div style="position: relative;left: 45px;top: 44px;" @click="getBeCode(1)">
          <span style="font-size:14px;color:#fff">入库</span><img class="scan" src="../assets/images/ewm.png" alt="scan" style="height:30px;width:31px;">
      </div>
      <div style="position: relative;left: 370px;bottom: 7px;" @click="getBeCode(2)">
          <span style="font-size:14px;color:#fff">出库</span><img class="scan" src="../assets/images/ewm.png" alt="scan" style="height:30px;width:31px;">
      </div>
    <van-row class="tHead">
      <van-col span="8" align="center">运单号</van-col>
      <van-col span="4" align="center">总件数</van-col>
      <van-col span="4" align="center">已扫描数</van-col>
      <van-col span="4" align="center">拆单</van-col>
      <van-col span="4" align="center">操作</van-col>
    </van-row>
    <van-row>
      <ul waterfall-disabled="disabled" waterfall-offset="200" class="tBody">
        <li v-for="(val,index) in orderData" :key="index">
          <van-col span="8" align="center">{{val.order_no}}</van-col>
          <van-col span="4" align="center">{{val.goods_num}}</van-col>
          <van-col span="4" align="center">{{val.barcode_num}}</van-col>
          <van-col span="4" align="center"><img src="../assets/images/chai.png" style="width:25px;height: 20px;"/></van-col>
          <van-col span="4" align="center"><img src="../assets/images/del.png" style="width:25px;" @click="delCode(val.orderId)"/></van-col>
        </li>
      </ul>
    </van-row>
  </div>
</template>
<script>
import dialog from './alert';
import { Waterfall } from "vant";
export default {
  components: {
    //dialog
  },
  data() {
    return {
      orderData: {},
      dataList: [],
      checkPsdShow: false,
      tips: { title: '提示', content: "提示内容", show: false}
    };
  },
  created(){
    var this_=this;
    window.getToAddress =function(obj, serializedTx){
        var obj=JSON.parse(obj);
        if(1==1){
          //出库
          this_.operationBegin(1);
        }else{
          //入库
          this_.operationBegin(2);
        }
    };
  },
  mounted() {
    var this_ = this;
    var order_id=this.utils.getRequestParam('order_id');
    this.getLoadOrder(order_id);
    this.$store.commit("changeParame", {
      headerBack: true,
      hederContent: "运单列表",
      bottom: "0",
      bottomShow: false
    });
  },
  methods: {
    getLoadOrder(val) {
      var this_ = this; 
      this.utils.request.queryOrderNumAndCodeNumById({ id: val},function(data) {
          this_.orderData=data;
      });
    },
    close(){
       this.$router.back(-1);
    },
    //删除扫码
    delCode(val){

    },
    //扫码
    getBeCode (type){
      //this.utils.request.getCamera({type:type});
      this.operationBegin(type,'2154211010001');
    },
    //入库出库操作
    operationBegin(type,orderNo){
      this.utils.request.getBeginCode({type:type,orderNo:orderNo},function(data){
        alert(data);
      });
    },
    toggleCheckPsd(){
      //this.checkPsdShow = (this.checkPsdShow) ? false : true
    },
     closeTips(data) {
      //this.tips.show = false;
    }
  }
};
</script>
<style lang="less" scoped>
.bg input::placeholder {
  color: #fff;
}
.tHead {
  height: 2rem;
  line-height: 2rem;
  font-size: 12px;
  font-weight: bold;
}
.tBody {
  position: fixed;
  left: 0;
  width: 100%;
  height: calc(100% - 13rem);
  overflow: auto;
  li {
    font-size: 12px;
    overflow: hidden;
    height: 30px;
    line-height: 30px;
    &:nth-child(odd) {
      margin-bottom: 2px;
      background-color: #efefef;
    }
    div {
      white-space: nowrap;
      overflow: auto;
    }
  }
}
.page1 {
  position: fixed;
  top: 3rem;
  width: 100%;
  height: calc(100% - 6rem);
}
.dateSelect {
  position: fixed;
  left: 0;
  top: 8rem;
  width: 100%;
}
ul li {
  list-style: none;
}
.track-list {
  margin: 20px;
  padding-left: 5px;
  position: relative;
}
.track-list li {
  position: relative;
  line-height: 18px;
  border-left: 1px solid #d9d9d9;
  color: #999;
  padding:9px 0 0 25px;
}
.track-list li.first {
  color: red;
  padding-top: 0;
  border-left-color: #fff;
}
.track-list li .node-icon {
  position: absolute;
  left: -6px;
  top: 50%;
  width: 11px;
  height: 11px;
}
.track-list li.first .node-icon {
  background-position: 0-72px;
}
.track-list li .time {
  margin-right: 20px;
  position: relative;
  top: 4px;
  display: inline-block;
  vertical-align: middle;
}
.track-list li .txt {
  max-width: 600px;
  position: relative;
  top: 4px;
  display: inline-block;
  vertical-align: middle;
}
.track-list li.first .time {
  margin-right: 20px;
}
.track-list li:before{
    position: absolute;
    left: -6px;
    top: 50%;
    content: '';
    border: 3px solid #f3f3f3;
    background-color: #d9d9d9;
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 5px;
}
.track-list .first:before {
    background-color: #fe4300;
    border-color: #f8e9e4;
}
</style>
