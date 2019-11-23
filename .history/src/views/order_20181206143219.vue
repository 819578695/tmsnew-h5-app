<template>
  <div class="page1">
    <van-row class="bg" type="flex" justify="center" style="border-bottom:1px solid #ccc;">
       <div>
        <van-col span="24" align="center">
          <input type="text" v-model="searchValue" placeholder="点击搜索公司名称" @change="getLoadOrder(searchValue)">
        </van-col>
      </div>
    </van-row>

    <van-row class="bg" >
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
    <van-row class="tHead">
      <van-col span="2" align="center">订单类型</van-col>
      <van-col span="5" align="center">箱号</van-col>
      <van-col span="2" align="center">供应商</van-col>
      <van-col span="5" align="center">委托人</van-col>
      <van-col span="5" align="center">收件人</van-col>
      <van-col span="5" align="center">站点名称</van-col>
      <!-- <p>序列公司名称月份新增合同数作废合同数合同总数</p> -->
    </van-row>
    <van-row>
      <ul waterfall-disabled="disabled"
          waterfall-offset="200"
          class="tBody">
        <li v-for="(val,index) in tableData" :key="index">
          <van-col span="2" align="center">{{index+1}}</van-col>
          <van-col span="4" align="center">{{val.company}}</van-col>
          <van-col span="3" align="center">{{val.date}}</van-col>
          <van-col span="5" align="center">{{val.addNum}}</van-col>
          <van-col span="5" align="center">{{val.removeNum}}</van-col>
          <van-col span="5" align="center">{{val.totalNum}}</van-col>
        </li>
      </ul>
       <div class="tfoot">
        <van-col span="4" align="center"><b>合计</b></van-col>
        <van-col span="6" align="center"><b>新增：</b>{{addNum}}</van-col>
        <van-col span="6" align="center"><b>作废：</b>{{delNum}}</van-col>
        <van-col span="8" align="center"><b>总数：</b>{{totalNum}}</van-col>
      </div>
    </van-row>
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
  </div>
</template>
<script>
import { Waterfall } from 'vant';
export default {
  data(){
    return {
      companyName: '',
      activeNames: ['1'],
      actionShow: false,
      actions: [
      ],
      tableData:[],
      dataList:[],
      count:0,
      disabled: false,
      date:{befor:new Date(new Date(new Date()-730*24*60*60*1000).getFullYear()+'-'+(new Date(new Date()-730*24*60*60*1000).getMonth()+1<10?'0'+(new Date(new Date()-730*24*60*60*1000).getMonth()+1):(new Date(new Date()-730*24*60*60*1000).getMonth()+1))+'-'+(new Date(new Date()-730*24*60*60*1000).getDate()<10?'0'+new Date(new Date()-730*24*60*60*1000).getDate():new Date(new Date()-730*24*60*60*1000).getDate())),after: new Date()},
      dateParemes:{
        now: new Date(),
        show: false,
        minDate: new Date(),
        currentDate: new Date(),
        min: new Date(2010,0),
        max: new Date(),
        select: 0,
      },
      addNum:0,
      delNum:0,
      totalNum:0,
      searchValue: ''
    }
  },
  directives: {
    WaterfallLower: Waterfall('lower')
  },
  mounted(){
    var this_=this;
    this.$store.commit('changeParame', {headerBack:true,hederContent:'运单查询',bottom:'1',bottomShow:false})
  },
  methods:{
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
      var this_=this;
      if(this.dateParemes.select == 0){
        this.date.befor = val
      }else if(this.dateParemes.select == 1){
        this.date.after = val
      }
       var obj={};
      var objTotal={};
      if(this.actionValId>0){
        obj={company_id:this_.actionValId,start:1,begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1),status: 0,t:'preservation-company',limit:'20'};
        objTotal={company_id:this_.actionValId,begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1),status: 0,t:'preservation-company'};
      }else{
        obj={company_id:this_.actionValId,start:1,begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1),status: 0,t:'preservation-company',limit:'20'};
        objTotal={company_id:this_.actionValId,begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1),status: 0,t:'preservation-company'};
      }
    },
    getLoadOrder (val){
      debugger
      this.utils.request.queryOrderInfoByNo({'order_no':val},function(data){
          debugger
      });
    }
  }
}
</script>
<style lang="less" scoped>
.bg input::placeholder{
  color: #fff;
}
.tHead{
  height: 2rem;
  line-height: 2rem;
  font-size: 12px;
  font-weight: bold;
}
.tBody{
  position: fixed;
  left: 0;
  width:100%;
  height: calc(100% - 13rem);
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
  div{
    overflow: auto;
    white-space: nowrap;
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
