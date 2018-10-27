<template>
  <div class="container">
    <header>
      <span></span>
      <span>金融会员</span>
      <span></span>
    </header>
    <div>
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png">
      <span>会员福利</span>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
  @import '../../common/css/element.scss';
  .container{
    background:white;
    margin-bottom:20px;
    header{
      background:white;
      height:80px;
      text-align:center;
      border-bottom:1px solid #e5e5e5;
      position:fixed;
      top:0;
      left:0;
      right:0;
      z-index:100;
      span:nth-of-type(2){
        color:#333;
        font-size:32px;
        line-height:80px;
      }
      span:nth-child(odd){
        display:block;
        width:40px;
        height:40px;
        position:absolute;
        top:20px;
      }
      span:first-child{
        background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==) no-repeat;
        left:20px;
      }
      span:last-child{
        right:20px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMCAYAAAG2I8urAAAAAXNSR0IArs4c6QAAAddJREFUSA3VVr1OwzAQto0oqgQPABszD4BY4TVIfwR0aBgQb8ALIAbSoVD1J7wGrFRiAokVsbGwMSAVCXPn4PSSxklMGol6SM539913/jnbjEFzGu0j/GOTUvJACr5Owx0L5SBZVxtqDffbqbel7gNqG6K441ABglN3PyJ9YBHKk2qZXNVdzcJVJAwJzR92IvmgjlLH7RSrBhNPAwPohs508FqPf5wIjQVhOtg0xrgNA1GsQIW5yZ7ZFrVwTA+XIaLm/M4feHsRXUKnDOzSy+s7Lnclxrf59PhwFtPNdMvACn/orTGYEcpWXals0L5JLgOrtnGwx/k54+x51L/c4ZxPq8iUza9+3liss1vY57uUdzTwRJ6kysDi6RBJBhOrNY/vaYJGuQRscrlKtmVMIstQEJucEJenWbxGe0GsmKkodQZ1royExFAGVlVZq3Wy/jn5uknaT4ofkqxWlve73Ys3kk9hcRF4oerhtieXeeqoOWv5g3yrmRoHjIvCC6cQnM95m41vVkybWDa+c+YVeHllxQztNr4hyCDYxLLxNdCFaptY4CvwZo8/PcJgVIBzSPlSXQF5UXjDF716iTbdQ8b4AZxJwb2qZlv2Rn3vOs9L5C/z9d95fwDELzC7i+rQHQAAAABJRU5ErkJggg==) no-repeat center center;
        background-size:40px;
      }
    }
    >div{
      margin-top:80px;
      height:140px;
      @include list(row);
      align-items:center;
      justify-content:space-between;
      padding:0 32px;
      box-sizing:border-box;
      img{
        width:100px;
        height:100px;
      }
      span{
        font-size:28px;
        color:#999;
        padding-right:32px;
        display:inline-block;
        background:url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) no-repeat right center;
      }
    }
  }
</style>