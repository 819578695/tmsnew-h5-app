<template>
    <div>
      <div align="center" style="padding-top:15px;">
      <van-row v-show="type==1" id="rows">
        <div style="height:600px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 3px 2px">
          <div style="width:100%;margin-bottom: 30px;padding-top: 15px;">
            <div style="width: 50%;float: left;">
              <span style="color:rgb(30, 131, 255)">运单状态：配送在途</span>
            </div>
          </div>
          <div style="width:100%;padding-bottom: 10px;margin-bottom: 30px;padding-top: 15px;">
            <div style="width: 75%;float: left;">
              <span style="font-size: 15px;">运单号：2111156156165156165165</span>
            </div>
          </div>
          <hr style="width: 95%;border: 0.6px solid rgba(128, 128, 128, 0.13);"/>
          <div style="width:95%;height: 30px;"><p style="float: left;width: 95%;">发货人：李小龙</p></div>
          <div style="width:95%;height: 30px;"><p style="float: left;width: 95%;">发货人：李小龙</p></div>
          <div style="width:95%;height: 30px;"><p style="float: left;width: 95%;">发货人：李小龙</p></div>
          <div style="width:95%;height: 30px;"><p style="float: left;width: 95%;">发货人：李小龙</p></div>

          <div style="font-size: 14px;width:90%;height: 30px;">
            <button style="background-color:rgb(240, 238, 242);float: right;border:none;height: 30px;width: 80px;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 6px;">查看详情</button>
          </div>
        </div>
      </van-row>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      type:1
    }
  },
  mounted(){
    this.$store.commit('changeParame', {headerBack:true,hederContent:'运单详情',bottom:'1',bottomShow:false})
  },
  methods:{
    getLoadIng(type){
      if(type==1){
          this.type=1;
      }else if(type==2){
          this.type=2;
      }else{
          this.type=3;
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .ewm{
  position: fixed;
  right: 4%;
  top: 12px;
  width: 1.5rem;
}
.black{
  color:#333;
}
.blue{
  color:rgb(30, 131, 255)
}
</style>