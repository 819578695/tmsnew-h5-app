<template>
  <div class="tips">
    <tips v-if="tips.show" :title="tips.title" :content="tips.content" @close="closeTips"></tips>
    <div id="wallet-del" class="enter-password">
      <div class="con">
        <p class="padding-left head2" style="padding-top: 12px;">拒收信息</p>
        <div class="btn-1 psd" style="overflow-y: auto;max-height: 260px;">
          <div style="margin-top: 15px;">
            <span>拒收件数：</span>
            <input
              type="number"
              :placeholder="`总件数 25`"
              @change="changesOrder"
              @keyup="changesOrder"
              v-model="num"
              style="height: 28px;width: 180px;"
            >
          </div>
          <div style="margin-top: 15px;">
            <span>拒收类型：</span>
            <select class="select">
              <option value=''>--请选择--</option>
              <option :value='item.id' v-for="(item, index) in arrayType" :key="index">{{item.val}}</option>
            </select>
          </div>
        </div>
        <p class="tips" v-show="tip.show" style="left:4%;"></p>
        <div class="foot">
          <span class="cancel" @click="cancel">关闭</span>
          <span class="affirm" @click="confirm">确认</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tips from "../../components/tips";
export default {
  components: {
    tips
  },
  props: {
    splitRequest: {
      type: Object
    }
  },
  data() {
    return {
      tip: { content: "内容", show: false },
      tips: { title: "提示", content: "提示内容", show: false },
      num: "",
      arrayType: [],
    };
  },
  mounted(){
    this.getConfig();
  },
  methods: {
    cancel() {
      this.$emit("close", "");
    },
    confirm() {},
    closeTips(data) {
      this.tips.show = false;
    },
    changesOrder() {},
    getConfig(){
      var this_=this;
      this.utils.request.getQueryList({pid:604,t:'sysConfig'}, function(data) {
        this_.arrayType = data;
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
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/css/variables.less");
.enter-password {
  position: fixed;
  left: 0;
  background-color: @color-dialog-background;
  width: 100%;
  height: 100%;
  z-index: 999;
  .con {
    padding: 0 4%;
    position: relative;
    left: 10%;
    width: 80%;
    border-radius: 1.5rem;
    background-color: @color-page-background;
    .head2 {
      margin: 1.5rem 0 1rem;
      font-size: 18px;
      color: #999;
    }
    .foot {
      border-radius: 0 0 1.5rem 1.5rem;
      height: 5rem;
      line-height: 5rem;
      text-align: right;
      span {
        display: inline-block;
        font-size: 18px;
      }
      .cancel {
        color: @color-text-light-black;
        margin-right: 3rem;
      }
      .affirm {
        color: @color-text-blue;
        padding-right: 4%;
      }
    }
    .btn-1 {
      margin: 0 4%;
    }
    .btn-affirm {
      margin-top: 2.5rem;
      height: 4.4rem;
      line-height: 4.4rem;
    }
  }
}
#walletName {
  border-color: transparent;
  margin-left: 5%;
  width: 45%;
}
.btn-del-position {
  position: fixed;
  bottom: 10%;
  left: 10%;
  color: #f18f35;
}
.eye {
  width: 2.2rem;
  top: calc(50% - 1.1rem);
}
.select {
  width: 45%;
  height: 35px;
  line-height: 40px;
  filter: alpha(opacity=0);
  cursor: pointer;
  font-size: 16px;
  border: hidden;
}
</style>
