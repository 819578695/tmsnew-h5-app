<template>
  <div class="tips">
    <div id="wallet-del" class="enter-password">
        <div class="con">
          <p class="padding-left header">{{title}}</p>
          <div class="psd">
            {{content}}
          </div>
          <p class="foot">
            <span class="tips_affirm " @click="closeTips">
              确认
            </span>
          </p>
        </div>
    </div> 
  </div>
  
</template>
<script>
export default {
  props:["title","content"],
  methods:{
    closeTips () {
      this.$emit("close",'')
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../assets/css/variables.less");
.header{
      margin: 3rem 0 1rem;
      font-size: 1.7rem;
      color: #999;
    }
.psd{
  text-align: left;
  color: #333333;
  font-size: 1.5rem;
  padding: 0 4% 1rem;
  line-height: 2rem;
}
.tips_affirm{
  padding-right: 1.9rem;
  font-size: 1.6rem;
  color: #3D81F8;
}
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
</style>
