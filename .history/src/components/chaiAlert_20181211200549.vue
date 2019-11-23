<template>
  <div class="tips">
   <div id="wallet-del" class="enter-password">
      <tips
      v-if="tips.show"
      :title="tips.title"
      :content="tips.content"
      @close="closeTips"
    ></tips>
         <div class="con">
            <p class="padding-left head2">拆单信息</p>
            <div class="btn-1 psd" style="overflow-y: auto;max-height: 300px;">
              <div style="margin-top: 15px;">
                <span>拆单数：</span><input type="number" :placeholder="`可拆分件数 ${dataRequest.surplusnum}`" v-model="num" style="border:0.5px solid #378888;height: 28px;width: 193px;"/>
              </div>
              <div style="margin-top: 15px;">
                <span>拆单数：</span><input type="number" :placeholder="`可拆分件数 ${dataRequest.surplusnum}`" v-model="num" style="border:0.5px solid #378888;height: 28px;width: 193px;"/>
              </div>
            </div>
            <p class="tips" v-show="tip.show" style="left:4%;">范德萨发</p>
             <div class="foot">
               <span class="cancel"  @click="cancel">
                关闭
              </span>
              <span class="affirm" @click="confirm">
                确认
              </span>
            </div>
         </div>
      </div>
  </div>
</template>
<script>
import tips from "./tips";
export default {
  components: {
    tips
  },
  props: {
    dataRequest:{
      type:Object
    }
  },
  data() {
    return {
      eye: false,
      clean_btn: false,
      tip:{content:'内容',show:false},
      tips: { title: '提示', content: "提示内容", show: false},
      data:{'aa':''},
      num:''
    };
  },
  methods: {
    clearInput() {
      this.password = "";
    },
    cancel () {
      this.$emit("close", "");
    },
    confirm () {
      if(''==this.num?0:this.num>this.dataRequest.surplusnum){
          this.tips={title: '提示', content: "确认件数，不能超过剩余件数", show:true};
          return false;
      }
      this.$emit("check",this.num,this.dataRequest.product_no);
    },
     closeTips(data) {
      this.tips.show = false;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/css/variables.less");
.enter-password {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: @color-dialog-background;
  width: 100%;
  height: 100%;
  z-index: 999;
  .con {
    padding: 0 4%;
    position: relative;
    left: 10%;
    top: 130px;
    width: 80%;
    border-radius: 1.5rem;
    background-color: @color-page-background;
    .head2{
      margin: 1.5rem 0 1rem;
      font-size: 18px;
      color: #999;
    }
    .foot {
      border-radius: 0 0 1.5rem 1.5rem;
      height: 6rem;
      line-height: 6rem;
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
</style>
