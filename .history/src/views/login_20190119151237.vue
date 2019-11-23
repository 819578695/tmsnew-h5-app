<template>
  <div>
    <img src="../assets/images/logo.jpg" alt="" class="logo">
    <van-cell-group>
      <van-field
        v-model="userName"
        label="手机号"
        placeholder="请输入手机号"
        :error-message="errName"
        left-icon="contact"
        @focus="cleanErr('errName')"
      />
      <van-field
        v-model="userPsd"
        :type="type"
        label="密码"
        placeholder="请输入密码"
        :error-message="errPsd"
        left-icon="pending-orders"
        @focus="cleanErr('errPsd')"
        :icon="icon"
        @click-icon="showPsd()"
      />
    </van-cell-group>
    <br />
    <div class="button--large login"  @click="login">
      登录
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return{
      userName:'',
      errName:'',
      userPsd:'',
      errPsd:'',
      icon: 'password-not-view',
      type:'password'
    }
  },
  mounted(){
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'http://pv.sohu.com/cityjson?ie=utf-8';
    document.body.appendChild(s);
    this.$store.commit('changeParame', {headerShow:false,hederContent:'登录',clt:'h5',bottom:'0',bottomShow: false})
  },
  methods:{
    login(){
      if(this.userName == ''){
        this.errName = '账号不能为空'
      }else if(this.userPsd == ''){
        this.errPsd = '密码不能为空'
      }else{
        // 发送post请求
        var this_ = this;
        this.utils.request.appDriverLogin({mobile:this.userName,pwd:this.userPsd},function(data){
            localStorage.setItem('token',data.token);
            localStorage.setItem('siteId',data.site_id);
            localStorage.setItem('siteId',data.site_id);
            this_.$router.push({name:'main'});
            localStorage.setItem('isLogin','true');
        });
      }
    },
    cleanErr(p){
      this[p] = ''
    },
    showPsd(){
      this.icon = (this.icon == "password-not-view") ? "password-view" : "password-not-view"
      this.type = (this.type == "password") ? "test" : "password"
    }
  }
}
</script>
<style scoped>
.logo{
  width: 70%;
  display: block;
  margin: 5rem auto;
}
</style>
