<template>
  <div class="page1">
    <van-row class="bg" type="flex" justify="center"  style="border-bottom:1px solid #ccc;">
      <div @click="toggleAction">
        <van-col span="24" align="center">
          <input placeholder="请输入订单号码">
        </van-col>
      </div>
    </van-row>
    <van-row class="bg" v-if="false">
      <div @click="toggleDatetime(0)">
        <van-col span="12" align="center">
          {{utils.dateTransion(date.befor,2)}}&nbsp;<i class="rili" />
        </van-col>
      </div>
      <div @click="toggleDatetime(1)">
        <van-col span="12" align="center">
          {{utils.dateTransion(date.after,2)}}&nbsp;<i class="rili" />
        </van-col>
      </div>
    </van-row>
    <van-row class="tHead">
      <van-col span="6" align="center">订单号</van-col>
      <!-- <van-col span="4" align="center">箱号</van-col> -->
      <van-col span="4" align="center">发件人</van-col>
      <van-col span="4" align="center">收件人</van-col>
      <van-col span="10" align="center">收件地址</van-col>
    </van-row>
    <van-row>
      <ul
          waterfall-disabled="disabled"
          waterfall-offset="180" 
          class="tBody">
        <li v-for="(val,index) in tableData" :key="index" @click="toggleDetails(val.id)">
          <van-col span="6" align="center">{{val.order_no}}</van-col>
          <!-- <van-col span="4" align="center">{{val.box_no}}</van-col> -->
          <van-col span="4" align="center">{{val.consign_user}}</van-col>
          <van-col span="4" align="center">{{val.recipient_user}}</van-col>
          <van-col span="10" align="center">{{val.endCity}}</van-col>
        </li>
      </ul>
    </van-row>
    <van-actionsheet
      v-model="actionShow"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      @cancel="closeAction"
    />
     <insuranceDetails v-if="details.show" @close="toggleDetails" :data='details.paremes' index='order'></insuranceDetails>
  </div>
</template>
<script>
import { Waterfall } from 'vant';
import insuranceDetails from '../components/insuranceDetails'
export default {
  components:{
    insuranceDetails
  },
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
      date:{befor:new Date(new Date(new Date()-365*24*60*60*1000).getFullYear()+'-'+(new Date(new Date()-365*24*60*60*1000).getMonth()+1<10?'0'+(new Date(new Date()-365*24*60*60*1000).getMonth()+1):(new Date(new Date()-365*24*60*60*1000).getMonth()+1))+'-'+(new Date(new Date()-365*24*60*60*1000).getDate()<10?'0'+new Date(new Date()-365*24*60*60*1000).getDate():new Date(new Date()-365*24*60*60*1000).getDate())),after: new Date()},
      dateParemes:{
        now: new Date(),
        show: false,
        minDate: new Date(),
        currentDate: new Date(),
        min: new Date(2010,0),
        max: new Date(),
        select: 0,
      },
      details:{
        show:false,
        paremes:{
          id:''
        }
      },
      businessAmount:26,
      ticketAmount:78,
    }
  },
  directives: {
    WaterfallLower: Waterfall('lower')
  },
  mounted(){
    var this_=this;
    this.$store.commit('changeParame', {headerBack:false,hederContent:'订单数据',bottom:'0',bottomShow:true})
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
        req={t:'order','type':'1'}
    }else{
        req={t:'order','type':'2'}
    }
    this.utils.request.queryOrderLists(req,function(data){
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
      // console.log(123)
    },
    toggleDetails(p){
      //传递参数用
      if(p){
        this.details.paremes.id = p
      }
      this.details.show = (this.details.show) ? false : true
    },
    onSelect(val){
      this.actionsData = val.name
      if(val.name=='全部订单'){
      }
      this.toggleAction()
      this.actionVal = val.name
      this.actionValId=val.id
    },
    toggleAction(){
      this.actionShow = (!!this.actionShow) ? false : true
    },
    closeAction(){
      this.actionShow = false
    },
    toggleDatetime (p) {
      this.dateParemes.select = p
      if(p == 0){
        this.dateParemes.min = new Date(2010,0)
        this.dateParemes.currentDate = this.date.befor
        this.dateParemes.max = this.date.after
      }else if(p == 1){
        this.dateParemes.min = this.date.befor  // 后者最小时间等于前者
        this.dateParemes.max = this.dateParemes.now //后者最大时间等于现在时间
        this.dateParemes.currentDate = this.date.after
      }
      this.dateParemes.show = (this.dateParemes.show) ? false : true
    },
    confirmDatetime(val){
      if(this.dateParemes.select == 0){
        this.date.befor = val
      }else if(this.dateParemes.select == 1){
        this.date.after = val
      }
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