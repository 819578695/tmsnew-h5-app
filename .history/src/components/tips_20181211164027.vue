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
</style>
