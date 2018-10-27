<template>
  <Panel title="白条福利" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
        <div>
            <h4>开通白条</h4>
            <p>送188元礼包</p>
        </div>
        <em>立即开通 > </em>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120" alt="">
        <div>
            <h4>白条闪付</h4>
            <p>新手享158元礼包</p>
        </div>
        <em>随机立减 > </em>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
        <div>
            <h4>白条提额</h4>
            <p>金融app专享提额礼包</p>
        </div>
        <em>去提额 > </em>
      </div>
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
  .panel{
    >h4{
      border-bottom:1px solid #ddd;
    }
    .content{
      @include list;
      .item{
        @include list(row);
        height:140px;
        align-items:center;
        &:after{
          content:'';
          width:100%;
          height:0;
          display:block;
          border-bottom:1px solid #ddd;
          box-sizing:border-box;
          margin-left:150px;
        }
        &:last-child{
          &:after{
            border:none;
          }
        }
        img{
          width:88px;
          height:88px;
          margin:0 32px;
          display:inline-block;
        }
        div{
          width:304px;
          color:#333;
          font-size:32px;
          line-height:1.8;
          p{
            color:#999;
            font-size:24px;
            line-height:1.1;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
          }
        }
        em{
          color: #FF801A;
          font-size: 28px;
        }
      }
    }
  }
</style>