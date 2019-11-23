import axios from 'axios'
import qs from 'qs'
const host='http://localhost:8083/';
// const host='http://nuser.zgtgroup.com/';
export default {
  request: {
    requestUrl (data, url, callback){
      var params = {};
      params = {
          'loginChannel': 'h5',
          'token': localStorage.getItem('token'),
          'sign': '70ffb548fc64ac1'
      }
      if (data != null && data != '') {
          for (var key in data) {
              params[key] = data[key];
          }
      }
      axios.post(url,qs.stringify(params))
      .then(rsp => {
        if(rsp.data.code == '0000'){
          if(callback != null) {
            callback(rsp.data.data);
          }
        }else if(rsp.data.code == '4000') { // 未登录
            this.$router.push({name:'login'})
        }else { // 出错
          alert(rsp.data.msg);
        }
      })
      .catch(error => {
        //console.log(error);
      });
    },
    //修改用户信息
    editUserInfo (data,callback){
      this.requestUrl(data,host+'sysUserTest/editUserInfo',callback)
    },
    //查询用户登录记录
    getUserLoginRecord (data,callback){
      this.requestUrl(data,host+'cmn/getUserLoginRecord',callback)
    },
    //查询用户信息
    getUserInfo (data,callback){
      this.requestUrl(data,host+'suser/getUserInfo',callback)
    },
    //查询列表信息
    getQueryList (data,callback){
      this.requestUrl(data,host+'cmn/queryList',callback)
    },
    //查询配置表
    getInitList (data,callback){
      this.requestUrl(data,host+'special/initList',callback)
    },
    //查询司机和投递员订单信息
    queryOrderLists (data,callback){
      this.requestUrl(data,host+'suser/queryOrderLists',callback)
    },
    //查询订单信息
    
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
  }
}