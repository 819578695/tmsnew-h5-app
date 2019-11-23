<template>
  <div>
    组件
  </div>
</template>
<script>
export default {
  props: {
    a:{
      default: '请输入密码'
    },
    content:{
      default: '输入密码'
    }},
  data() {
    return {
      eye: false,
      inputType: "password",
      password: "",
      clean_btn: false,
      tip:{content:'内容',show:false}
    };
  },
}
</script>
