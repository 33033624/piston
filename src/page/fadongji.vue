<template>
<div class="wrap">
  <div class='wrap-top'>
      <piston></piston>
      <p class='int-wrap'>
        <Airinlet></Airinlet>
        <span class='pin-box'>
          <pin></pin>
        </span>

      </p>
      <p class='out-wrap'>
        <Airoutlet></Airoutlet>
        <span class='pin-box'>
          <pin></pin>
        </span>
      </p>
      <span class='spark-box'>
        <sparlplug></sparlplug>
      </span>
  </div>
  <p class='wrap-bottom'>
      <span class='circle1'></span>
      <span class='circle2'></span>
  </p>
</div>
</template>

<script>
// import { mapGetters } from 'vuex'
// function conColor (txt) {
//   console.log(`%c${txt}`, 'background: white; color: red')
// }
import square from '../components/square.vue'
import circle from '../components/circle.vue'
import piston from '../components/piston.vue'
import Airinlet from '../components/Airinlet.vue'
import Airoutlet from '../components/Airoutlet.vue'
import pin from '../components/pin.vue'
import sparlplug from '../components/sparkplug.vue'
export default {
  created () {
    console.log(1111)
  },
  components: {
    square,
    circle,
    piston,
    Airinlet,
    Airoutlet,
    pin,
    sparlplug
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  html,body{
    height: 100%;
    width: 100%;
    background: red;
  }
  .wrap{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   height:400px;
   width:400px;
   margin: 0 auto;
   transform: translateY(50%);
   margin-top: -200px;
  position: relative;
   }
   .wrap-top{
     position: absolute;
     top: 0;
     width: 80px;
     height: 200px;
     background: lightblue;
     border: 10px solid black;
     border-bottom: 2px solid black;
   }
   .spark-box{
     position: absolute;
     z-index: 3;
     left: 50%;
     transform: translateX(-50%);
     top: -35px;

   }
   .int-wrap{
     position: absolute;
     left: -70px;
     top: -25px;
   }
   .pin-box{
     position: absolute;
     top: -20px;
     z-index: 2;
     right: -5px;
   }
   .out-wrap{
     position: absolute;
     right: -70px;
     top: -25px;
     .pin-box{
       right: 65px;
     }
   }
   .wrap-bottom{
     display: flex;
     position: absolute;
     bottom: 35px;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     width: 100px;
     height: 100px;
     border-radius: 50%;
     border: 1px solid black;

   }
   .wrap-bottom:after,.wrap-bottom:before{
     display: block;
     content:'';
     position: absolute;
     width: 100px;
     background: red;
     border-bottom: 1px dashed black;
   }
   .wrap-bottom:before{
     transform: rotate(90deg);
   }
   .circle1,.circle2{
     display: block;
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background: yellow;
     position: absolute;
   }
</style>
