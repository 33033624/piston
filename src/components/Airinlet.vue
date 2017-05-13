<template lang="html">
  <div class="inlet">
    <p class='section1'></p>
    <section class='section2'>

    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.inlet{
  position: relative;
  width: 100px;
  height: 20px;
  background: yellow;
}
.section1{
  height: 15px;
  width:70px;
  border: 5px solid black;
  position: absolute;
  z-index: 1;
  border-right: none;
  background: white;
}
.section2{
  width: 20px;
  height: 30px;
  background: white;
  position: absolute;
  right: 0;
  top: 0;
  border: 5px solid black;
}
</style>
