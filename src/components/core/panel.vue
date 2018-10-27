 <template>
  <section :class="[panelClass,cname]">
    <h4>-{{ title }}-</h4>
    <slot></slot>
  </section>
</template>
<script>
  export default {
    props:{
      cname:{
        type:String,
        default:""
      },
      title:{
        type:String,
        default:""
      }
    },
    data() {
      return {
        panelClass:"panelBox"
      }
    }
  }
</script>
<style lang="scss">
  @import "../../common/css/element.scss";
  .panelBox{
    @include panel;
  }
</style>