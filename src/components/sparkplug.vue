<template lang="html">
  <div class="sparkplug">
    <span></span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.sparkplug{
  width: 4px;
  height: 40px;
  background: yellow;
  position: relative;
}
span{
  position: absolute;
  width:20px;
  height: 15px;
  background: blue;
  left: 50%;
  margin-left: -10px;
  top:10px;
}

</style>
