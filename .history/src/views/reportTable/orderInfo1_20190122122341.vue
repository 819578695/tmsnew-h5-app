<template>
  <div>
    <tips
      v-if="tips.show"
      :title="tips.title"
      :content="tips.content"
      @close="closeTips"
    ></tips>
    <noOrderAlert
      v-if="noOrderAlertShow"
      @close="togglecheckAlert"
      v-bind:splitRequest="splitRequest"
      v-on:checkChaiOrder="checkChaiOrder"
    ></noOrderAlert>
    <div align="center" style="padding-top:15px;">
      <van-row v-show="type==1" id="rows">
        <div
          style="height：auto;min-height:555px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 1px 1px;"
        >
          <div style="width:100%;margin-bottom: 30px;padding-top: 15px;">
            <div style="width: 50%;float: left;">
              <span style="color:rgb(30, 131, 255)">运单状态：{{orderInfo.order.statusval}}</span>
            </div>
          </div>
          <div style="width:100%;padding-bottom: 10px;margin-bottom: 30px;padding-top: 15px;">
            <div style="width: 100%;float: left;text-align: left;padding-left: 30px;">
              <span style="font-size: 15px;color:#333;">运单号：{{orderInfo.order.order_no}}</span>
            </div>
          </div>
          <hr style="width: 95%;border: 0.6px solid rgba(128, 128, 128, 0.13);">
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;margin-top: 15px;">
            <span style="color:#808080;font-size: 15px;">发货人：</span>
            <span style="color: rgb(51, 51, 51)">{{orderInfo.order.send_users}}</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#808080;font-size: 15px;">取件地址：</span>
            <span style="color: rgb(51, 51, 51)">{{orderInfo.order.send_addr}}</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#808080;font-size: 15px;">发货单位：</span>
            <span style="color: rgb(51, 51, 51)">{{orderInfo.order.send_org}}</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#808080;font-size: 15px;">收件人：</span>
            <span style="color: rgb(51, 51, 51)">{{orderInfo.order.recipient_users}}</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#808080;font-size: 15px;">收件地址：</span>
            <span style="color: rgb(51, 51, 51)">{{orderInfo.order.recipient_addr}}</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#808080;font-size: 15px;">收件单位：</span>
            <span style="color: rgb(51, 51, 51)">{{orderInfo.order.recipient_org}}</span>
          </div>
          <div style="height:auto;min-height: 170px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 1px 1px;" v-for="(item, index) in orderInfo.orderProList" :key="index">
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 100%;float: left;text-align: left;padding-left: 20px;">
                <span style="color:rgb(30, 131, 255)">{{item.product_no}}</span>
              </div>
            </div>
            <hr style="width: 100%;border: 0.6px solid rgba(128, 128, 128, 0.13);">
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 50%;float: left;text-align: left;padding-left: 20px;">
                <span style="color:#808080;font-size: 15px;">{{item.name}}</span>
              </div>
            </div>
            <div style="width:100%;margin-bottom: 25px;padding-top: 10px;">
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">重量：</span>
                <span style="color:red;font-size: 16px;font-weight: 700;">{{item.weight}}</span>
                <span style="color:#333;font-size: 15px;">kg</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">体积：</span>
                <span style="color:red;font-size: 16px;font-weight: 700;">{{item.volume}}</span>
                <span style="color:#333;font-size: 15px;">m³</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">数量：</span>
                <span style="color:red;font-size: 16px;font-weight: 700;">{{item.number}}</span>
                <span style="color:#333;font-size: 15px;">件</span>
              </div>
            </div>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;" v-show="orderInfo.order.status==251">
            <span style="font-size: 15px;color:#333;">回单上传：</span>
          </div>
          <div style="width:85%;text-align: left;margin-bottom: 15px;" id="returnOrder" v-show="orderInfo.order.status==251">
            <div class="image-view">
              <div class="addbox">
                <input type="file" @change="getImgBase()">
                <div class="addbtn">+</div>
              </div>
              <div class="view">
                <div class="item" v-for="(item, index) in imgBase64" :key="index">
                  <span class="cancel-btn" @click="delImg(index)">x</span>
                  <img :src="item">
                </div>
              </div>
            </div>
          </div>
          <div style="clear:both;height:0;font-size: 1px;line-height: 0px;"></div>
        </div>
        <div style="font-size: 14px;width:95%;height: 50px;" v-show="orderInfo.order.status==251">
          <button
            style="float: left;border:none;height: 35px;width: 45%;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 5px;background-color: red;color:#fff"
           @click="submit()">确认签收</button>
          <button
            style="float: right;border:none;height: 35px;width: 45%;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 5px;background-color: red;color:#fff"
          @click="rejection()">拒收</button>
        </div>
      </van-row>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import tips from "../../components/tips";
import noOrderAlert from "./noOrderAlert";
export default {
   components: {
    tips,noOrderAlert
  },
  data() {
    return {
      type: 1,
      imgBase64: [], //存储img base64的值将值传给后端处理
      imgUrl: [],
      orderid:this.$route.query.id,
      orderInfo:{},
      tips: { title: '提示', content: "提示内容", show: false},
      noOrderAlertShow:false,
      totalCount:0,
      splitRequest:{}
    };
  },
  mounted() {
    this.getOrderInfo();
    this.$store.commit("changeParame", {
      headerBack: true,
      hederContent: "运单详情",
      bottom: "1",
      bottomShow: false
    });
  },
  methods: {
    getOrderInfo() {
      var this_ = this;
      this.utils.request.stowageOrderInfo({sign:'qazwsxedc',orderid:this.orderid},function(data) {
        this_.orderInfo = data;
        debugger
        if(null!=data.orderProList && data.orderProList.length>0){
          for(var i=0;i<data.orderProList.length;i++){
            this_.number=parseInt(this_.number)+parseInt(data.orderProList[i].number);
           }
        }
      });
    },
    //获取图片base64实现预览
    getImgBase() {
      var this_=this;
      var formData = new window.FormData();
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imgBase64.push(e.target.result);
      };
      formData.append('file',file);
      var options = {  // 设置axios的参数
        //  url: this.utils+'/orderBack/imgUpload',
         url:'http://139.224.114.150:8888/orderBack/imgUpload',
         data: formData,
         method: 'post',
         headers: { 
          'Content-Type': 'multipart/form-data'
         }
      }
      axios(options).then((res) => {
         this_.imgUrl.push(res.data.data.imgUrl);
         reader.readAsDataURL(file);
      }) // 发送请求
    },
    //删除图片
    delImg(index) {
      this.imgBase64.splice(index, 1);
      this.imgUrl.splice(index,1);
    },
    submit(){
      var this_=this;
       this.utils.request.noticeOperate({sign:'qazwsxedc',bizId:this.orderid,data:this.imgUrl.join(","),type:4,status:252},function(data) {
         this_.tips={title: '提示',content: "签收成功", show:true};
      });
    },
    closeTips(data) {
      this.tips.show = false;
      window.location.reload();
    },
    rejection(){
        this.noOrderAlertShow=true;
    },
    togglecheckAlert(){
      this.noOrderAlertShow = (this.noOrderAlertShow) ? false : true
    },
    checkChaiOrder(data,order_no){
      var this_=this;
      this.splitRequest={totalCount:this.totalCount};
      this.noOrderAlertShow=false;
    }
  }
};
</script>
<style lang="less" scoped>
.ewm {
  position: fixed;
  right: 4%;
  top: 12px;
  width: 1.5rem;
}
.black {
  color: #333;
}
.blue {
  color: rgb(30, 131, 255);
}
* {
  margin: 0 auto;
  padding: 0;
  font-family: "微软雅黑";
}
.clearboth::after {
  content: "";
  display: block;
  clear: both;
}
.image-view {
  height: 250px;
  margin: 30px auto;
}
.image-view .addbox {
  float: left;
  position: relative;
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
  text-align: center;
}
.image-view .addbox input {
  position: absolute;
  left: 0;
  height: 100px;
  width: 100px;
  opacity: 0;
}
.image-view .addbox .addbtn {
  float: left;
  height: 100px;
  width: 100px;
  line-height: 100px;
  color: #fff;
  font-size: 40px;
  background: #ccc;
  border-radius: 10px;
}
.image-view .item {
  position: relative;
  float: left;
  height: 100px;
  width: 100px;
  margin: 10px 10px 0 0;
}
.image-view .item .cancel-btn {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 20px;
  height: 20px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  background: red;
  border-radius: 10px;
  cursor: pointer;
}
.image-view .item img {
  width: 100%;
  height: 100%;
}
.image-view .view {
  clear: both;
}
</style>