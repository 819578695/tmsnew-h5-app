<template>
  <div class="page1">
    <van-row class="bg" type="flex" justify="center"  style="border-bottom:1px solid #ccc;">
      <div @click="toggleAction">
        <van-col span="24" align="center">
          {{actionVal}}&nbsp;<i class="dwon" />
        </van-col>
      </div>
    </van-row>

    <van-row class="bg" style="">
      <div @click="toggleDatetime(0)">
        <van-col span="10" align="right">
          {{utils.dateTransion(date.befor,2)}}&nbsp;<i class="rili" />
        </van-col>
      </div>
      <van-col span="4" align="center">-</van-col>
      <div @click="toggleDatetime(1)">
        <van-col span="10" align="left">
          {{utils.dateTransion(date.after,2)}}&nbsp;<i class="rili" />
        </van-col>
      </div>
    </van-row>
    
    <van-row class="bg"  style="line-height: 1rem;font-size: 14px;padding-top: 5px;height:2rem">
      <van-radio-group v-model="radio">
        <van-col span="6" align="center">投保方式：</van-col>
        <van-col span="6" align="center">
          <van-radio name="1">全部</van-radio>
        </van-col>
        <van-col span="6" align="center">
          <van-radio name="2">线上</van-radio>
        </van-col>
        <van-col span="6" align="center">
          <van-radio name="3">线下</van-radio>
        </van-col>
      </van-radio-group>
    </van-row>

    <van-row class="bg"  style="line-height: 1rem;font-size: 14px;padding-top: 5px;height:2rem">
      <van-radio-group v-model="radioJoin">
        <van-col span="6" align="center">加盟类型：</van-col>
        <van-col span="6" align="center">
          <van-radio name="1">全部</van-radio>
        </van-col>
        <van-col span="6" align="center">
          <van-radio name="2">专线</van-radio>
        </van-col>
        <van-col span="6" align="center">
          <van-radio name="3">三方</van-radio>
        </van-col>
      </van-radio-group>
    </van-row>
    
    <van-row class="tHead">
      <van-col span="2" align="center">序列</van-col>
      <van-col span="5" align="center">公司名称</van-col>
      <van-col span="2" align="center">月份</van-col>
      <van-col span="3" align="center">类型</van-col>
      <van-col span="5" align="center">投保成功票数</van-col>
      <van-col span="5" align="center">投保金额</van-col>
      <van-col span="2" align="center">保费</van-col>
    </van-row>
    <van-row>
      <ul v-waterfall-lower="loadMore"
          waterfall-disabled="disabled"
          waterfall-offset="200"
          class="tBody">
        <li v-for="(val,index) in tableData" :key="index" @click="toggleDetails(index)">
          <van-col span="2" align="center">{{index+1}}</van-col>
          <van-col span="5" align="center">{{val.company}}</van-col>
          <van-col span="2" align="center">{{val.date}}</van-col>
          <van-col span="3" align="center">{{val.class}}</van-col>
          <van-col span="5" align="center">{{val.succeedNum}}</van-col>
          <van-col span="5" align="center">{{val.price}}</van-col>
          <van-col span="2" align="center">{{val.price}}</van-col>
        </li>
      </ul>
    </van-row>
       <div class="tfoot">
        <!-- <van-col span="3" align="center"><b>合计</b></van-col>
        <van-col span="6" align="center"><b>运费金额：</b>{{addNum}}</van-col>
        <van-col span="6" align="center"><b>投保金额：</b>{{delNum}}</van-col>
        <van-col span="8" align="center"><b>保费：</b>{{totalNum}}</van-col> -->
        <b>合计</b>
        <b>运费金额：</b>{{addNum}}
        <b>投保金额：</b>{{delNum}}
        <b>保费：</b>{{totalNum}}
      </div>
    
    <van-actionsheet
      v-model="actionShow"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      @cancel="closeAction"
    />

    <van-datetime-picker
      v-model="dateParemes.currentDate"
      v-if="dateParemes.show"
      type="year-month"
      :max-date="dateParemes.max"
      :min-date="dateParemes.min"
      @cancel="toggleDatetime"
      @confirm="confirmDatetime"
      class="dateSelect"
    />
    <insuranceDetails v-show="details.show" @close="toggleDetails" :data='details.paremes'></insuranceDetails>
  </div>
</template>
<script>
import { Waterfall } from 'vant'
import insuranceDetails from '../../components/insuranceDetails'
export default {
  components:{
    insuranceDetails
  },
  data(){
    return {
      radio:"1",
      radioJoin:"1",
      activeNames: ['1'],
      actionShow: false,
      actionVal: '点击选择加盟公司',
      actionValId:0,
      actions: [
      ],
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
      addNum:0,
      delNum:0,
      totalNum:0
    }
  },
  directives: {
    WaterfallLower: Waterfall('lower')
  },
  mounted(){
    var this_=this;
     //查询加盟公司
    this.utils.request.getTraderList('',function(data){
       var array=[{name:'全部'}];
       if(null!=data){
         for(var i=0;i<data.length;i++){
            var obj={};
            obj.name=data[i].name;
            obj.id=data[i].id;
            array.push(obj);
         }
         this_.actions=array;
       }
    });
     //查询开票报表合计数
     this.getTotal({status: 0,t:'insurance'});
    //查询开票列表数据
    this.getLoadLists({status: 0,t:'insurance',limit:'20',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)});
    this.$store.commit('changeParame', {headerBack:true,hederContent:'保险报表',bottom:'1',bottomShow:false})
  },
  methods:{ 
    onSelect(item) {
      this.toggleAction()
      this.actionVal = item.name
      this.actionValId=item.id
      var obj={trader_id:this.actionValId,status: 0,t:'insurance',limit:'20',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)};
      var objTotal={trader_id:this.actionValId,status: 0,t:'insurance',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)};
      if(this.radioJoin!="1"){
        obj.trader_type=this.radioJoin;
        objTotal.trader_type=this.radioJoin;
      }
     if(this.radio!="1"){
        obj.insurance_mode=this.radio==2?0:1;
        objTotal.insurance_mode=this.radio==3?0:2;
      }
      this.getLoadLists(obj)
      this.getTotal(objTotal)
    },
    toggleAction(){
      this.actionShow = (this.actionShow) ? false : true
    },
    closeAction(){
      this.actionShow = false
    },
    loadMore() {
      this.disabled = true;
      var this_=this;
      if(null!=this_.dataList && this_.dataList.length>0 && this_.count<this_.dataList.length){
        var dataLength=this_.dataList.length-this_.count>=20?this_.count+20:this_.count+(this_.dataList.length-this_.count);
        for (let i = this_.count; i<dataLength; i++) {
          this_.count=this_.count+1;
          var obj={};
          obj.company=null!=this_.dataList[i].trader_name?this_.dataList[i].trader_name:'-';
          obj.date=null!=this_.dataList[i].months?this_.dataList[i].months:'-';
          obj.class=null!=this_.dataList[i].trader_type?this_.dataList[i].trader_type:'-';
          obj.succeedNum=null!=this_.dataList[i].t_amount?this_.dataList[i].t_amount:'-';
          obj.price=null!=this_.dataList[i].insurance_money?this_.dataList[i].insurance_money:'-';
          this_.tableData.push(obj)
        }
      }
       this.disabled = false;
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
      var obj={status: 0,t:'insurance',limit:'20',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)};
      var objTotal={status: 0,t:'insurance',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)};
      if(this.radioJoin!="1"){
        obj.trader_type=this.radioJoin;
        objTotal.trader_type=this.radioJoin;
      }
      if(this.radio!="1"){
        obj.insurance_mode=this.radio==2?0:1;
        objTotal.insurance_mode=this.radio==3?0:2;
      }
       if(this.actionValId>0){
        obj.trader_id=this.actionValId;
        objTotal.trader_id=this.actionValId;
      }
      this.getLoadLists(obj)
      this.getTotal(objTotal)
      this.toggleDatetime()
    },
    toggleDetails(p){
      //传递参数用
      if(p){
        this.details.paremes.id = p
      }
      this.details.show = (this.details.show) ? false : true
    },
    getLoadLists(req){
      //查询报表列表数据
      var this_=this;
      this.count=0;
      this.utils.request.getAllList(req,function(data){
       var array=[];
       this_.dataList=data;
       if(null!=data){
         var dataLength=data.length>20?20:data.length;
         for(var i=0;i<dataLength;i++){
            this_.count=this_.count+1;
            var obj={};
            obj.company=null!=data[i].trader_name?data[i].trader_name:'-';
            obj.date=null!=data[i].months?data[i].months:'-';
            obj.class=null!=data[i].trader_type?data[i].trader_type:'-';
            obj.succeedNum=null!=data[i].t_amount?data[i].t_amount:'-';
            obj.price=null!=data[i].insurance_money?data[i].insurance_money:'-';
            array.push(obj);
         }
         this_.tableData=array;
       }else{
         this_.tableData=[];
       }
    });
    },
    getTotal(req){
      var this_=this;
       //查询保险报表合计数
      this.utils.request.getAllTotal(req,function(data){
       if(null!=data){
         this_.addNum=data.freight_money_total;
         this_.delNum=data.insurance_money_total;
         this_.totalNum=data.insurance_free_total;
       }
    });
    }
  },
  watch:{
    radio (){
      var obj={status: 0,t:'insurance',limit:'20',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)};
      var objTotal={status: 0,t:'insurance',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)};
      if(this.actionValId>0){
        obj.trader_id=this.actionValId;
        objTotal.trader_id=this.actionValId;
      }
      if(this.radioJoin!="1"){
        obj.trader_type=this.radioJoin;
        objTotal.trader_type=this.radioJoin;
      }
      if(this.radio!="1"){
        obj.insurance_mode=this.radio==2?0:1;
        objTotal.insurance_mode=this.radio==3?0:2;
      }
      this.getLoadLists(obj)
      this.getTotal(objTotal)
    },
    radioJoin (){
      var obj={status: 0,t:'insurance',limit:'20',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)};
      var objTotal={status: 0,t:'insurance',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)};
      if(this.actionValId>0){
        obj.trader_id=this.actionValId;
        objTotal.trader_id=this.actionValId;
      }
      if(this.radio!="1"){
        obj.insurance_mode=this.radio==2?0:1;
        objTotal.insurance_mode=this.radio==3?0:2;
      }
      if(this.radioJoin!="1"){
        obj.trader_type=this.radioJoin;
        objTotal.trader_type=this.radioJoin;
      }
      this.getLoadLists(obj)
      this.getTotal(objTotal)
    }
  }
}
</script>
<style lang="less" scoped>
.tHead{
  height: 2rem;
  line-height: 2rem;
  font-size: 12px;
  font-weight: bold;
}
.tBody{
  position: fixed;
  left: 0;
  bottom: 3rem;
  width:100%;
  height: calc(100% - 17rem);
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
    &:active{
      background-color: #605CA8;
    }
    div{
      white-space: nowrap;
      overflow: auto
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
  text-align: center;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  border-top: 1px solid #ccc;
  b{
      display: inline-block;
      padding-left: 5px;
    }
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
