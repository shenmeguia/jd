<template>
  <div class="container">
    <div class="item" v-for="item in info" :key="item.img">
      <img :src="item.img">
      <p>{{ item.mine }}</p>
      <p :class="item.special ? special : ''">{{ item.text }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        special:'special',
        info:[
          {
            img:"//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70",
            mine:"我的资产",
            text:"查看全部资产"
          },
          {
            img:"//img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70",
            mine:"我的优惠券",
            text:"查看全部"
          },
          {
            img:"//img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90",
            mine:"我的金币",
            text:"赚金币兑好物"
          },
          {
            img:"//img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90",
            mine:"我的金条",
            text:"查看额度"
          },
          {
            img:"//img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70",
            mine:"我的借钱",
            text:"查看全部产品"
          },
          {
            img:"//img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70",
            mine:"我的白条",
            text:"去提额"
          },
          {
            img:"//img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70",
            mine:"我的众筹",
            text:"查订单/物流"
          },
          {
            img:"//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70",
            mine:"我的保障",
            text:"全方位保障"
          },
          {
            img:"//img12.360buyimg.com/jrpmobile/jfs/t1/3907/34/11652/2582/5bd04759Ea9acb837/f893bf98fd67c192.png?width=54&height=54",
            mine:"我的爱车",
            text:"绑车享专属福利",
            special:true
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../common/css/element.scss';
  .special{
      color:#FF801A !important;
    }
  .container{
    background:white;
    margin-bottom:20px;
    .item{
      @include list(row);
      box-sizing:border-box;
      height:112px;
      padding:0 32px;
      align-items:center;
      position:relative;
      width:100%;
      overflow:hidden;
      &:after{
        content:'';
        height:1px;
        position:absolute;
        width:100%;
        background:#eee;
        left:112px;
        bottom:0;
      }
      &:last-child{
        &:after{
          height:0;
        }
      }
      img{
        width:48px;
        height:48px;
        margin-right:32px;
      }
      p:nth-of-type(1){
        font-size:32px;
        color:#333;
        width:46%;
      }
      p:last-child{
        box-sizing:border-box;
        color:#999;
        font-size:28px;
        text-align:right;
        width:40%;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow: hidden;
        padding-right:32px;
        background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
        background-size: 18px 30px;
      }
    }
  }
</style>