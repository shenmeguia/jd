<template>
  <Panel title="理财精选" :cname="$style.panel">
    <section :class="$style.content">
      <dl :class="$style.item" v-for="item in items" :key="item.title">
        <dt>{{ item.title }}<span>{{ item.sub }}</span></dt>
        <dd>{{ item.rate }}</dd>
        <dd>{{ item.text }}</dd>
      </dl>
    </section>
  </Panel>
</template>
<script>
  import Panel from '../core/panel.vue';
  export default {
    components:{
      Panel
    },
    data() {
      return {
        items: [{
            title: "定期理财",
            sub: "理财首选",
            rate: "5.60%",
            text: "历史年化回报率",
        }, {
            title: "小白理财",
            sub: "理财首选",
            rate: "4.22%",
            text: "7日年化收益率",
        }, {
            title: "月月盈",
            sub: "养老保障",
            rate: "5%",
            text: "七日年化收益率",
        }, {
            title: "小白基金",
            sub: "天天赚钱",
            rate: "4.27%",
            text: "7日年化收益率",
        }]
      }
    }
  }
</script>
<style lang="scss" module>
  @import '../../common/css/element.scss';
  .panel{
    .content{
      @include list(row);
      box-sizing:border-box;
      justify-content:space-around;
      &:after{
         content:'';
         position:relative;
         width:100%;
         height:0;
         border-bottom:1px solid #eee;
         top:-208px;
      }
      .item{
        width:50%;
        box-sizing:border-box;
        padding:34px 18px;
        position:relative;
        &:after{
          content:'';
          position:absolute;
          width:1px;
          height:136px;
          top:50%;
          right:0;
          margin-top:-68px;
          background:#eee;
        }
        &:nth-child(2n){
          &:after{
            display:none;
          }
        }
        dt{
          font-size:30px;
          line-height:42px;
          font-weight:bold;
          color:#333;
          span{
            color:#ff5155;
            font-size:22px;
            padding:0 8px;
            margin-left:2px;
            border:1px solid #ff5155;
            vertical-align:1px;
          }
        }
        dd{
          &:nth-of-type(1){
            font-weight: 700;
            font-size: 44px;
            height: 58px;
            line-height: 58px;
            color: #FF5155;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          &:nth-of-type(2){
            font-size: 24px;
            height: 34px;
            line-height: 34px;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>