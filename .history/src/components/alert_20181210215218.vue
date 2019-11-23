<template>
  <div class="tips">
   <div id="wallet-del" class="enter-password">
         <div class="con">
            <p class="padding-left head2">发顺丰</p>
            <div class="btn-1 psd">
              <div class="input-clean">
                <input :type="inputType" placeholder="请输入" class="input-1" v-model="password">
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
    title:{
      default: '请输入密码'
    },
    content:{
      default: '输入密码'
    }},
  data() {
    return {
      eye: false,
      inputType: "password",
      password: "",
      clean_btn: false,
      tip:{content:'内容',show:false}
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
    bottom: 50% - 10rem;
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
      margin: 3rem 0 1rem;
      font-size: 1.7rem;
      color: #999;
    }
    .foot {
      border-radius: 0 0 1.5rem 1.5rem;
      height: 7rem;
      line-height: 6rem;
      text-align: right;
      span {
        display: inline-block;
        font-size: 1.6rem;
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
