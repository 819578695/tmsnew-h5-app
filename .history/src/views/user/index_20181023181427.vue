<template>
  <div>
    <div class="headImg">
      <div><img :src="headImg" @error="utils.defaultHead" alt=""></div>
      <p class="userName">{{userName}}</p>
    </div>
    <van-cell-group>
      <van-cell title="账户名称" is-link arrow-direction="right" value="" @click="toggleUpdaName"/>
      <van-cell title="密码修改" is-link arrow-direction="right" value="" @click="$router.push({name:'updataPsd'})"/>
      <van-cell title="登录记录" is-link arrow-direction="right" value="" @click="$router.push({name:'record'})"/>
      <van-cell title="退出登录" is-link arrow-direction="right" value="" @click="outLogin"/>
    </van-cell-group>


    <van-dialog
      v-model="updataNameShow"
      show-cancel-button
      @confirm="updataNames()"
    >
      <van-field
        v-model="updataName.newName"
        label="用户名"
        placeholder="请输入新的用户名"
      />
      <van-field
        v-model="updataName.password"
        type="password"
        label="验证密码"
        placeholder="请输您的密码"
      />
    </van-dialog>
  </div>
</template>


<style lang="less" scoped>
html .van-dialog__content{
  padding: 20px 10px;
}
.headImg{
  height: 12rem;
  padding: 2rem 0 1rem;
  // background-color: #F5A623;
  background-color: #605CA8;
  div{
    margin: 0 auto;
    width: 6rem;
    height: 6rem;
    background: #fff;
    border-radius: 50%;
    overflow: hidden; 
  }
  img{
    width: 100%;
  }
  .userName{
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
  }
}
</style>

