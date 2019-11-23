<template>
  <div class="page1">
    <van-row class="bg" type="flex" justify="center" style="border-bottom:1px solid #ccc;">
      <div>
        <van-col span="24" align="center">
          <input
            type="text"
            v-model="searchValue"
            placeholder="点击输入物流单号"
            @change="getLoadOrder(searchValue)"
          >
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
      <ul waterfall-disabled="disabled" waterfall-offset="200" class="tBody">
        <li @click="toggleDetails(orderData.id)">
          <van-col span="3" align="center">{{orderData.businesstype}}</van-col>
          <van-col
            span="3"
            align="center"
            v-if="null!=orderData.is_pick_up_parts && orderData.is_pick_up_parts==0"
          >否</van-col>
          <van-col
            span="3"
            align="center"
            v-if="null!=orderData.is_pick_up_parts && orderData.is_pick_up_parts!=0"
          >是</van-col>
          <van-col span="4" align="center">{{orderData.consignuser}}</van-col>
          <van-col span="4" align="center">{{orderData.recipientuser}}</van-col>
          <van-col span="4" align="center">{{orderData.is_special}}</van-col>
          <van-col span="3" align="center">{{orderData.receive_amoount}}</van-col>
          <van-col span="3" align="center">{{orderData.statusval}}</van-col>
        </li>
      </ul>
    </van-row>

    <div class="track-rcol">
      <div class="track-list">
        <ul>
          <li class="first">
            <i class="node-icon"></i>
            <span class="time">2016-03-10 18:07:15</span>
            <span class="txt">感谢您在京东购物，欢迎您再次光临！</span>
          </li>
          <li>
            <i class="node-icon"></i>
            <span class="time">2016-03-10 18:07:15</span>
            <span class="txt">【京东到家】京东配送员【申国龙】已出发，联系电话【18410106883，感谢您的耐心等待，参加评价还能赢取京豆呦】</span>
          </li>
          <li>
            <i class="node-icon"></i>
            <span class="time">2016-03-10 18:07:15</span>
            <span class="txt">感谢您在京东购物，欢迎您再次光临！</span>
          </li>
          <li>
            <i class="node-icon"></i>
            <span class="time">2016-03-10 18:07:15</span>
            <span class="txt">感谢您在京东购物，欢迎您再次光临！</span>
          </li>
          <li>
            <i class="node-icon"></i>
            <span class="time">2016-03-10 18:07:15</span>
            <span class="txt">感谢您在京东购物，欢迎您再次光临！</span>
          </li>
          <li>
            <i class="node-icon"></i>
            <span class="time">2016-03-10 18:07:15</span>
            <span class="txt">感谢您在京东购物，欢迎您再次光临！</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Waterfall } from "vant";
export default {
  data() {
    return {
      actionShow: false,
      orderData: {},
      dataList: [],
      count: 0,
      data: {},
      disabled: false,
      addNum: 0,
      delNum: 0,
      totalNum: 0,
      searchValue: "",
      details: {
        show: false,
        paremes: {
          id: "",
          products: []
        }
      }
    };
  },
  directives: {
    WaterfallLower: Waterfall("lower")
  },
  mounted() {
    var this_ = this;
    this.$store.commit("changeParame", {
      headerBack: true,
      hederContent: "运单查询",
      bottom: "0",
      bottomShow: false
    });
  },
  methods: {
    getLoadOrder(val) {
      var this_ = this;
      this.utils.request.queryOrderInfoByNo(
        { order_no: "154415163373400000003" },
        function(data) {
          this_.orderData = data;
          this_.utils.request.queryInfo({ t: "order", id: data.id }, function(
            dataInfo
          ) {
            this_.data = dataInfo;
            this_.data.products = [];
            this_.utils.request.queryPage(
              { t: "orderProduct", order_id: data.id, start: 1, limit: 1000 },
              function(dataProduct) {
                this_.data.products = dataProduct;
              }
            );
          });
        }
      );
    },
    toggleDetails(p) {
      this.$router.push({ name: "orderDetails", query: { data: this.data } });
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
  padding: 9px 0 0 25px;
  line-height: 18px;
  border-left: 1px solid #d9d9d9;
  color: #999;
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
  background: url(img/order-icons.png) -21px -72px no-repeat;
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
 .track-list li.first .txt {
  max-width: 600px;
}
</style>
