<template>
  <div class="page1">
    <van-row class="bg" type="flex" justify="center" style="border-bottom:1px solid #ccc;">
       <div @click="toggleAction">
        <van-col span="24" align="center">
          <input type="text" v-model="searchValue" placeholder="点击搜索公司名称" @change="getLoadAlls">
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
      <van-col span="2" align="center">序列</van-col>
      <van-col span="5" align="center">公司名称</van-col>
      <van-col span="2" align="center">月份</van-col>
      <van-col span="5" align="center">新增合同数</van-col>
      <van-col span="5" align="center">作废合同数</van-col>
      <van-col span="5" align="center">合同总数</van-col>
      <!-- <p>序列公司名称月份新增合同数作废合同数合同总数</p> -->
    </van-row>
    <van-row>
      <ul v-waterfall-lower="loadMore"
          waterfall-disabled="disabled"
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
      actionVal: '请点击选择',
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
    //查询承运公司
    this.utils.request.getCompanyNameList('',function(data){
       var array=[];
       if(null!=data){
         for(var i=0;i<data.length;i++){
            var obj={};
            obj.name=data[i].name;
            obj.id=data[i].id;
            array.push(obj);
         }
       }
      this_.actions=array;
      this_.actionVal = data[0].name;
      this_.actionValId=data[0].id;
       //查询开票报表合计数
      this_.getTotal({status: 0,t:'preservation-company',company_id:this_.actionValId});
      //查询开票列表数据
      this_.getLoadLists({company_id:this_.actionValId,status: 0,t:'preservation-company',start:1,limit:'20',begin_time:this_.utils.dateTransion(this_.date.befor,1),end_time:this_.utils.dateTransion(this_.date.after,1)});
   });
    this.$store.commit('changeParame', {headerBack:true,hederContent:'保全报表',bottom:'1',bottomShow:false})
  },
  methods:{
    onSelect(item) {
      this.toggleAction()
       this.actionVal = item.name
      this.actionValId=item.id
      this.getLoadLists({company_id:this.actionValId,status: 0,t:'preservation-company',start:1,limit:'20',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)})
      this.getTotal({company_id:this.actionValId,status: 0,t:'preservation-company'})
      //this.actionVal = item.name
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
          obj.company=null!=this_.dataList[i].company_name?this_.dataList[i].company_name:'-';
          obj.date=null!=this_.dataList[i].months?this_.dataList[i].months:'-';
          obj.addNum=null!=this_.dataList[i].new_contract_count?this_.dataList[i].new_contract_count:'-';
          obj.removeNum=null!=this_.dataList[i].out_contract_count?this_.dataList[i].out_contract_count:'-';
          obj.totalNum=null!=this_.dataList[i].contract_count?this_.dataList[i].contract_count:'-';
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
      this.getLoadLists(obj)
      this.getTotal(objTotal)
      this.toggleDatetime(val)
    },
    getLoadLists(req){
       //查询保全列表数据
      var this_=this;
      this.count=0;
      this.utils.request.queryPage(req,function(data){
       var array=[];
       this_.dataList=data;
       if(null!=data){
         var dataLength=data.length>20?20:data.length;
         for(var i=0;i<dataLength;i++){
            this_.count=this_.count+1;
            var obj={};
            obj.company=null!=data[i].company_name?data[i].company_name:'-';
            obj.date=null!=data[i].months?(data[i].months).replace('20',''):'-';
            obj.addNum=null!=data[i].new_contract_count?data[i].new_contract_count:'-';
            obj.removeNum=null!=data[i].out_contract_count?data[i].out_contract_count:'-';
            obj.totalNum=null!=data[i].contract_count?data[i].contract_count:'-';
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
      this.utils.request.queryTotal(req,function(data){
       if(null!=data){
         this_.addNum=null!=data.new_contract_count_total && ''!=data.new_contract_count_total?data.new_contract_count_total:0;
         this_.delNum=null!=data.out_contract_count_total && ''!=data.out_contract_count_total?data.out_contract_count_total:0;
         this_.totalNum=null!=data.contract_count_total && ''!=data.contract_count_total?data.contract_count_total:0;
       }
    });
  },
  getLoadAlls (){
    this.getTotal({company_name:this.searchValue,status: 0,t:'preservation-company',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)});
    this.getLoadLists({company_name:this.searchValue,status: 0,t:'preservation-company',limit:'20',begin_time:this.utils.dateTransion(this.date.befor,1),end_time:this.utils.dateTransion(this.date.after,1)});
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
