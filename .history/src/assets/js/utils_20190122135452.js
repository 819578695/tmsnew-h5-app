import axios from 'axios'
import qs from 'qs'
//const host='http://localhost:8080/';
const host='http://139.224.114.150:8888/';
export default {
  request: {
    requestUrl (data, url, callback){
      var params = {};
      params = {
          'clt': 'h5',
          'token': localStorage.getItem('token'),
          'sign': 'qazwsxedc'
      }
      if (data != null && data != '') {
          for (var key in data) {
              params[key] = data[key];
          }
      }
      axios.post(url,qs.stringify(params))
      .then(rsp => {
        if(rsp.data.code == '0000'){
          if(callback != null && null!=rsp.data.data) {
            callback(rsp.data.data);
          }else{
            callback(rsp.data.rows);
          }
        }else if(rsp.data.code == '4000') { // 未登录
          window.location.href="/login";
        }else { // 出错
          alert(rsp.data.msg);
        }
      });
    },
    //修改用户信息
    editDriverName (data,callback){
      this.requestUrl(data,host+'appUser/editDriverName',callback)
    },
    //查询用户登录记录
    getUserLoginRecord (data,callback){
      this.requestUrl(data,host+'cmn/getUserLoginRecord',callback)
    },
    //查询用户信息
    getDriverInfo (data,callback){
      this.requestUrl(data,host+'appUser/getDriverInfo',callback)
    },
    // 修改用户密码
    editPwd (data,callback){
      this.requestUrl(data,host+'appUser/editPwd',callback)
    },
    //查询列表信息
    getQueryList (data,callback){
      this.requestUrl(data,host+'cmn/queryList',callback)
    },
    // 司机登录
    appDriverLogin (data,callback){
      this.requestUrl(data,host+'appUser/appDriverLogin',callback)
    },
    //查询司机和投递员订单信息
    queryOrderLists (data,callback){
      this.requestUrl(data,host+'suser/queryOrderLists',callback)
    },
    //查询订单信息
    queryOrderInfoByNo (data,callback){
      this.requestUrl(data,host+'order/queryOrderInfoByNo',callback)
    },
    //查询分页信息
    queryPage (data,callback){
      this.requestUrl(data,host+'cmn/queryPage',callback)
    },
    //查询详细信息
    queryInfo (data,callback){
      this.requestUrl(data,host+'cmn/queryInfo',callback)
    },
    getCamera(val) {
      //调用摄像头
      if (this.checkPhoneSystem() == 'android') {
        window.android.startFunction()
      } else if (this.checkPhoneSystem() == 'ios') {
        window.webkit.messageHandlers.ScanAction.postMessage(null);
        // 获取返回值
      } else {
        console.log('未在Android或ios上执行')
      }
    },
    orderStatusSet(data,callback){
      this.requestUrl(data,host+'order/orderStatusSet',callback)
    },
    //根据整车单号查询信息
    queryVehiclePlanByNo(data,callback){
      this.requestUrl(data,host+'orderVehiclePlan/queryVehiclePlanByNo',callback)
    },
     //根据商品编码，查询商品信息-
    queryProductByCode (data,callback){
      this.requestUrl(data,host+'order/queryProductByCode',callback)
    },
    //查询配载订单列表
    stowageOrderList (data,callback){
      this.requestUrl(data,host+'appInterface/stowageOrderList',callback)
    },
     //查询配载列表
     stowageList (data,callback){
      this.requestUrl(data,host+'appInterface/stowageList',callback)
    },
    //更新状态
    noticeOperate(data,callback){
      this.requestUrl(data,host+'appInterface/noticeOperate2',callback)
    },
    //订单信息及货物信息列表
    stowageOrderInfo(data,callback){
      this.requestUrl(data,host+'appInterface/stowageOrderInfo',callback)
    },
    //根据运单号和司机ID查询
    queryOrderByDriver(data,callback){
      this.requestUrl(data,host+'order/queryOrderByDriver',callback)
    },
    //根据司机ID查询配载单
    queryShippingByDriver(data,callback){
      this.requestUrl(data,host+'order/queryShippingByDriver',callback)
    },
    //新增编辑
    editUserInfo(data,callback){
      this.requestUrl(data, host + 'cmn/editInfo', callback);
    },
    //新增编辑
    editUserInfo(data,callback){
      this.requestUrl(data, host + 'cmn/editInfo', callback);
    },
    checkPhoneSystem() {
      var u = navigator.userAgent,
        app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid) {
        //这个是安卓操作系统
        return 'android'
      } else if (isIOS) {
        //这个是ios操作系统
        return 'ios'
      }
    }
  },
  dateTransion(date,type=0){
    let addZero = (p) => {
      if(p<10){
        return "0"+p
      }else{
        return p
      }
    }
    let y = date.getFullYear()
    let m = addZero(date.getMonth()+1)
    let d = addZero(date.getDate())
    let time;
    if(type == 0){
      time =  `${y}年${m}月${d}日`
    }else if(type == 1){
      time =  `${y}-${m}-${d}`
    }else if(type == 2){
      time =  `${y}年${m}月`
    }
    return time;
  },
  defaultHead(event){
    event.target.src = '/static/images/defaultHead.jpg'
  },
  getRequestParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
}