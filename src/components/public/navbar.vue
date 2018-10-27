<template>
  <div class="footer">
    <ul class="content">
      <li>
        <router-link to="/">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/3407/34/11002/1846/5bcdaa05Edda203d5/3312fe482a40718d.png?width=60&height=60" alt="">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/money">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/2637/24/11195/2434/5bcdaa0cE5adfd269/6fbab868bc17e2e4.png?width=60&height=60" alt="">
          <p>理财</p>
        </router-link>
      </li>
      <li>
        <router-link to="/ious">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/4222/1/11021/1735/5bcdaa14E894acdf6/1b175d1a892561ca.png?width=60&height=60" alt="">
          <p>白条</p>
        </router-link>
      </li>
      <li>
        <router-link to="/raise">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/627/32/11235/2025/5bcdaa1bEadd94b65/0cb6d1089ef5cdca.png?width=60&height=60" alt="">
          <p>众筹</p>
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/4240/24/11110/4339/5bcdaa3dE1eefc103/269abe492593eb4d.png?width=60&height=60" alt="">
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
  @import '../../common/css/element.scss';
  .footer{
    width:100%;
    height:100px;
    position:fixed;
    bottom:0;
    left:0;
    z-index:999;
    background:white;
    border-top:1px solid #eee;
    .content{
      @include list(row);
      justify-content: space-around;
      li{
        text-align:center;
        a{
          text-decoration:none;
          img{
            width:44px;
            height:44px;
            margin:12px auto 6px;
          }
          p{
            font-size:22px;
            color:#656565;
          }
        }
      }
    }
  }
</style>