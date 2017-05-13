<template lang="html">
  <div class="pin">
    <p class='pin-top'></p>
    <span class='pin-bottom'></span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
 .pin{
   height: 60px;
   width: 40px;

 }
 .pin-top{
   width: 10px;
   height: 100%;
   background: pink;
   margin-left: 50%;
   transform: translateX(-50%);

 }
 .pin-bottom{
   display: block;
   height: 8px;
   width: 30px;
   background: pink;
   margin-left: 50%;
   transform: translateX(-50%);
 }
</style>
