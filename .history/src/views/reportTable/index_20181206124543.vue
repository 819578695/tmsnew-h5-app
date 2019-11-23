<template>
    <img src="../../assets/images/ewm.png" alt="" class="ewm">
</template>
<script>
export default {
  data(){
    return {
      companyName: '',
      activeNames: ['1'],
      actionShow: false,
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
  mounted(){

  },
  methods:{
    toggleDate(){
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