<template>
  <div>
    <div align="center" style="padding-top:15px;">
      <van-row v-show="type==1" id="rows">
        <div
          style="height：auto;min-height:600px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 1px 1px;"
        >
          <div style="width:100%;margin-bottom: 30px;padding-top: 15px;">
            <div style="width: 50%;float: left;">
              <span style="color:rgb(30, 131, 255)">运单状态：配送在途</span>
            </div>
          </div>
          <div style="width:100%;padding-bottom: 10px;margin-bottom: 30px;padding-top: 15px;">
            <div style="width: 75%;float: left;">
              <span style="font-size: 15px;color:#333;">运单号：2111156156165156165165</span>
            </div>
          </div>
          <hr style="width: 95%;border: 0.6px solid rgba(128, 128, 128, 0.13);">
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#D9D9D9;font-size: 15px;">发货人：</span>
            <span>李小龙</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#D9D9D9;font-size: 15px;">取件地址：</span>
            <span>李小龙</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#D9D9D9;font-size: 15px;">发货单位：</span>
            <span>李小龙</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#D9D9D9;font-size: 15px;">收件人：</span>
            <span>李小龙</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#D9D9D9;font-size: 15px;">收件地址：</span>
            <span>李小龙</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="color:#D9D9D9;font-size: 15px;">收件单位：</span>
            <span>李小龙</span>
          </div>
          <div
            style="height:auto;min-height: 170px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 1px 1px;"
          >
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 70%;float: left;">
                <span style="color:rgb(30, 131, 255)">2111156156165156165165-1</span>
              </div>
            </div>
            <hr style="width: 100%;border: 0.6px solid rgba(128, 128, 128, 0.13);">
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 22%;float: left;">
                <span style="color:#D9D9D9;font-size: 15px;">商品1</span>
              </div>
            </div>
            <div style="width:100%;margin-bottom: 25px;padding-top: 10px;">
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">重量：</span>
                <span style="color:red;font-size: 16px;font-weight: 700;">2</span>
                <span style="color:#333;font-size: 15px;">kg</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">体积：</span>
                <span style="color:red;font-size: 16px;font-weight: 700;">2</span>
                <span style="color:#333;font-size: 15px;">m³</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">数量：</span>
                <span style="color:red;font-size: 16px;font-weight: 700;">2</span>
                <span style="color:#333;font-size: 15px;">件</span>
              </div>
            </div>
          </div>
          <div
            style="height:auto;min-height: 170px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 1px 1px;"
          >
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 70%;float: left;">
                <span style="color:rgb(30, 131, 255)">2111156156165156165165-2</span>
              </div>
            </div>
            <hr style="width: 100%;border: 0.6px solid rgba(128, 128, 128, 0.13);">
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 22%;float: left;">
                <span style="color:#D9D9D9;font-size: 15px;">商品2</span>
              </div>
            </div>
            <div style="width:100%;margin-bottom: 25px;padding-top: 10px;">
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">重量：</span>
                <span style="color:red;font-size: 16px;font-weight: 700;">2</span>
                <span style="color:#333;font-size: 15px;">kg</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">体积：</span>
                <span style="color:red;font-size: 16px;font-weight: 700;">2</span>
                <span style="color:#333;font-size: 15px;">m³</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">数量：</span>
                <span style="color:red;font-size: 16px;font-weight: 700;">2</span>
                <span style="color:#333;font-size: 15px;">件</span>
              </div>
            </div>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <span style="font-size: 15px;color:#333;">回单上传：</span>
          </div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <div class="image-view">
              <div class="addbox">
                <input type="file" @change="getImgBase()">
                <div class="addbtn">+</div>
              </div>
              <div class="view">
                <div class="item" v-for="(item, index) in imgBase64">
                  <span class="cancel-btn" @click="delImg(index)">x</span>
                  <img :src="item">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="font-size: 14px;width:95%;height: 50px;">
          <button
            style="float: left;border:none;height: 35px;width: 45%;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 5px;background-color: red;color:#fff"
          >确认收货</button>
          <button
            style="float: right;border:none;height: 35px;width: 45%;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 5px;background-color: red;color:#fff"
          >拒收</button>
        </div>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 1,
      imgBase64: [] //存储img base64的值将值传给后端处理
    };
  },
  mounted() {
    this.$store.commit("changeParame", {
      headerBack: true,
      hederContent: "运单详情",
      bottom: "1",
      bottomShow: false
    });
  },
  methods: {
    getLoadIng(type) {
      if (type == 1) {
        this.type = 1;
      } else if (type == 2) {
        this.type = 2;
      } else {
        this.type = 3;
      }
    },
    //获取图片base64实现预览
    getImgBase() {
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imgBase64.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    //删除图片
    delImg(index) {
      this.imgBase64.splice(index, 1);
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
  width: 400px;
  height: 300px;
  margin: 50px auto;
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