<template>
  <div class="tips">
   <div id="wallet-del" class="enter-password">
         <div class="con">
            <p class="padding-left head2">商品详情</p>
            <div class="btn-1 psd">
              <div style="border:2px solid rgba(122, 143, 154, 0.2)">
                <table style="border-collapse:separate; border-spacing:0px 10px;" align="center">
                  <tr align="center">
                    <td>商品名称：</td>
                    <td>{{dataRequest.name}}</td>
                  </tr>
                  <tr align="center">
                    <td>商品件数：</td>
                    <td>{{dataRequest.number}}</td>
                  </tr>
                  <tr align="center">
                    <td>商品体积：</td>
                    <td>{{dataRequest.volume}}</td>
                  </tr>
                  <tr align="center">
                    <td>商品重量：</td>
                    <td>{{dataRequest.weight}}</td>
                  </tr>
                  <tr align="center">
                    <td>&nbsp&nbsp 提货费：</td>
                    <td>{{dataRequest.amount_pick_up}}</td>
                  </tr>
                  <tr align="center">
                    <td>&nbsp&nbsp&nbsp&nbsp 运费：</td>
                    <td>{{dataRequest.amount_line_transportation_cost}}</td>
                  </tr>
                  <tr align="center">
                    <td>&nbsp&nbsp 送货费：</td>
                    <td>{{dataRequest.amount_delivery}}</td>
                  </tr>
                  <tr align="center">
                    <td>其他费用：</td>
                    <td>{{dataRequest.amount_other}}</td>
                  </tr>
                  <tr align="center">
                    <td>&nbsp&nbsp 保价费：</td>
                    <td>{{dataRequest.amount_protect}}</td>
                  </tr>
                </table>
              </div>
              <div style="margin-top: 15px;">
                <span>确认件数：</span><input type="number" :placeholder="`总件数${dataRequest.goods_num}`" style="border:0.5px solid #378888;height: 28px;width: 193px;"/>
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
export default {
  props: {
    dataRequest:{
      type:Object
    }
  },
  data() {
    return {
      eye: false,
      inputType: "password",
      password: "",
      clean_btn: false,
      tip:{content:'内容',show:false},
      data:{'aa':''}
    };
  },
  watch: {
    password() {
      if (this.password == "" || isNaN(this.password)) {
        this.clean_btn = false;
      } else {
        this.clean_btn = true;
        this.tip.show =false
      }
    }
  },
  methods: {
    clearInput() {
      this.password = "";
    },
    cancel () {
      this.$emit("close", "");
    },
    confirm () {
      if (this.password == localStorage.getItem('walletPass')) {
        this.$emit("check", "true")
      } else {
        this.tip = {content:this.$t('mine.psdErr'),show:true}
      }
    },
    showPassword() {
      /* 密码显示 */
      if (this.eye) {
        this.eye = false;
        this.inputType = "password";
      } else {
        this.eye = true;
        this.inputType = "text";
      }
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
    position: absolute;
    left: 10%;
    bottom: 15%;
    width: 80%;
    border-radius: 1.5rem;
    background-color: @color-page-background;
    // .head {
    //   background-color: @color-dialog-header-background;
    //   height: 5rem;
    //   line-height: 5rem;
    //   border-radius: 1.5rem 1.5rem 0 0;
    //   margin-bottom: 1.6rem;
    //   font-size: 1.7rem;
    //   color: #999999;
    //   font-weight: 500;
    // }
    .head2{
      margin: 2rem 0 1rem;
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
