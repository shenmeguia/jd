<template>
  <Panel title="APP下载" :class="$style.panel">
    <section :class="$style.content">
      <div></div>
      <p>立即下载</p>
      <span>copyright﹫2014-2018</span>
    </section>
  </Panel>
</template>
<script>
  import Panel from '../core/panel.vue';
  export default {
    components:{
      Panel
    }
  }
</script>
<style lang="scss" module>
  @import '../../common/css/element.scss';
  html,body{
    background:white;
  }
  .panel{
    margin:0 !important;
    >h4{
      display:none;
    }
    .content{
      @include list;
      width:100%;
      height:1136px;
      justify-content:center;
      align-items:center;
      >div{
        background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
        width:600px;
        height:800px;
        background-size:100% auto;
        margin-top:-400px;
      }
      p{
        @include btn($size:32px);
        height:100px;
        line-height:100px;
        width:470px;
        background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
        box-shadow: 0 12px 32px 0 rgba(255,159,135,.6);
        position: fixed;
        bottom: 130px;
      }
      span{
        font-size:24px;
        color:#eee;
        position:fixed;
        bottom:16px;
      }
    }
  }
</style>