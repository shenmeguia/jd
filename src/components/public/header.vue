<template>
  <div class="header">
    <span class="left">
      <a href="javascript:;">注册</a>
      &nbsp;|&nbsp;
      <a href="javascript:;">登录</a>
    </span>
    <router-link to="/download"><btn class="download">APP下载</btn></router-link>
  </div>
</template>
<script>
  import btn from '../core/btn.vue';
  export default {
    components:{
      btn
    }
  }
</script>
<style lang="scss" scoped>
  .header{
    color:#666;
    height:100px;
    line-height:100px;
    position:fixed;
    left:0;
    right:0;
    top:0;
    font-size:32px;
    background:#fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-size:auto 50%;
    z-index:100;
    .left{
      font-size:28px;
      height:30px;
      line-height:30px;
      margin:17px 0 0 18px;
      a{
        text-decoration:none;
        color:#666;
      }
    }
    .download{
      float:right;
      font-size:24px;
      border:none;
      height:56px;
      line-height:56px;
      min-width:120px;
      padding:0;
      border-radius:4px;
      margin:28px 24px 0 0;
    }
  }
</style>