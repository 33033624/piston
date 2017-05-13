<template lang="html">
  <div class="piston">
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <span></span>
    <p></p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
   .piston{
     width: 80px;
     height: 70px;
     background: blue;
     position: relative;
     top: 20px;
   }
   ul{
     position: absolute;
     top: 10px;
     width: 100%;
     li{
       width: 100%;
       margin-top: 3px;
       height: 5px;
       background: pink;
     }
   }
   span{
     position: absolute;
     width: 20px;
     height: 20px;
     background: pink;
     border-radius: 50%;
     top: 60%;
     left: 50%;
     transform: translateX(-50%);
   }

</style>
