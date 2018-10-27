<template>
  <div :class="[btnClass,cname]">
    <!-- 插槽 -->
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props:{
      cname:{
        type:String,
        default:""
      }
    },
    data() {
      return {
        btnClass: "btn"
      }
    }
  }
</script>
<style lang="scss">
  @import "../../common/css/element.scss";
  .btn{
    @include btn;
  }
</style>