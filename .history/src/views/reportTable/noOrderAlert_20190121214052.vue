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
              style="height: 28px;width: 193px;"
            >
          </div>
          <div style="margin-top: 15px;">
            <span>拒收类型：</span>
            <select class="select">
              <option value>--请选择--</option>
              <option value>--请选择--</option>
              <option value>--请选择--</option>
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
      eye: false,
      clean_btn: false,
      tip: { content: "内容", show: false },
      tips: { title: "提示", content: "提示内容", show: false },
      num: "",
      orderDatas: { number: 0, weight: 0 },
      array: [],
      numTotal: 0,
      number: 0,
      weight: 0
    };
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
    getnumTotal() {}
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
  width: 100%;
  height: 40px;
  line-height: 40px;
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  *margin-top: 12px;
  filter: alpha(opacity=0);
  cursor: pointer;
  font-size: 16px;
}
</style>
