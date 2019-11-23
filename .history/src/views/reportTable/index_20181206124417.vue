<template>
  <div class="page1">
    <van-row class="bg" type="flex" justify="center"  style="border-bottom:1px solid #ccc;">
      <div @click="toggleAction">
        <van-col span="24" align="center">
          {{actionVal}}&nbsp;<i class="dwon" />
        </van-col>
      </div>
    </van-row>
    <img src="../../assets/images/ewm.png" alt="" class="ewm">
  </div>
</template>
<script>
export default {
  data(){
    return {
      companyName: '',
      activeNames: ['1'],
      actionShow: false,
      actionVal: '请点击选择订单状态',
      actionValId:0,
      actions: [],
      tableData:[],
      dataList:[],
      count:0,
      disabled: false,
      details:{
        show:false,
        paremes:{
          id:''
        }
      },
      businessAmount:26,
      ticketAmount:78
    }
  },
  directives: {
    WaterfallLower: Waterfall('lower')
  },
  mounted(){
    this.$store.commit('changeParame', {headerBack:false,hederContent:'扫描条形码',bottom:'1',bottomShow:true})
    var this_=this;
     //查询订单分类
    this.utils.request.getInitList({type:'order_status'},function(data){
       var array=[{name:'全部'}];
       if(null!=data){
         for(var i=0;i<data.length;i++){
            var obj={};
            obj.name=data[i].val;
            obj.id=data[i].id;
            array.push(obj);
         }
         this_.actions=array;
       }
    });
     //查询订单列表
     var req={};
    if(localStorage.getItem("type")=="courier"){
        req={t:'order','orderManage1':'true'}
    }else{
        req={t:'order','orderManage2':'true'}
    }
    this.utils.request.getQueryList(req,function(data){
       if(null!=data){
         for(var i=0;i<data.length;i++){
            var obj={};
            obj.id=null!=data[i].id?data[i].id:'-';
            obj.order_no=null!=data[i].order_no?data[i].order_no:'-';
            obj.consign_user=null!=data[i].consignuser?data[i].consignuser:'-';
            obj.recipient_user=null!=data[i].recipientuser?data[i].recipientuser:'-';
            obj.endCity=null!=data[i].endcity?data[i].endcity:'-';
            this_.tableData.push(obj);
         }
       }
    });

  },
  methods:{
    toggleDate(){
      this.dateShow = (this.dateShow) ? false : true
    },
    onSelect(val){
      this.actionsData = val.name
      if(val.name=='全部订单'){
      }
      this.toggleAction()
      this.actionVal = val.name
      this.actionValId=val.id
    },
     toggleDetails(p){
      //传递参数用
      if(p){
        this.details.paremes.id = p
      }
      this.details.show = (this.details.show) ? false : true
    },
    toggleAction(){
      this.actionShow = (!!this.actionShow) ? false : true
    },
    closeAction(){
      this.actionShow = false
    }
  }
}
</script>
<style lang="less" scoped>
.tHead{
  height: 2rem;
  line-height: 2rem;
  font-size: 14px;
}
.ewm{
  position: fixed;
  right: 4%;
  top: 12px;
  width: 1.5rem;
}
.tBody{
  position: fixed;
  left: 0;
  width:100%;
  height: calc(100% - 10.5rem);
  overflow: auto;
  li{
    font-size: 12px;
    overflow: hidden;
    height: 30px;
    line-height: 30px;
    &:nth-child(odd){
      margin-bottom: 2px;
      background-color: #efefef;
    }
    div{
      white-space: nowrap;
      overflow: auto;
    }
  }
}
.tfoot{
  position: fixed;
  // bottom:3rem;
  bottom:0rem;
  left: 0;
  width: 100%;
  font-size: 14px;
  height: 3rem;
  line-height: 3rem;
  border-top: 1px solid #ccc;
}
.page1{
  position:fixed;
  top: 3rem;
  width: 100%;
  height: calc(100% - 6rem);
}
.dateSelect{
  position: fixed;
  left: 0;
  top: 8rem;
  width: 100%;
}
</style>