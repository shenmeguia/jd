<template>
  <div class="container">
    <div class="item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70">
      <p>实名认证</p>
    </div>
    <div class="item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70">
      <p>帮助中心</p>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import '../../common/css/element.scss';
  .container{
    margin-bottom:120px;
    .item{
      background:white !important;
      @include list(row);
      box-sizing:border-box;
      height:112px;
      padding:0 32px;
      align-items:center;
      position:relative;
      width:100%;
      margin-bottom:20px;
      &:after{
        content:'';
        width:18px;
        height:30px;
        background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) no-repeat;
        background-size: 18px 30px;
        position:absolute;
        right:32px;
      }
      img{
        width:48px;
        height:48px;
        margin-right:32px;
      }
      p{
        font-size:32px;
        color:#333;
      }
    }
  }
</style>