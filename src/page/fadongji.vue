<template>
<div class="wrap">
  <div class='wrap-top'>
      <span class='process'>{{process}}</span>
      <piston></piston>
      <p class='int-wrap'>
        <i>进气口</i>
        <Airinlet></Airinlet>
        <span class='pin-box'>
          <pin></pin>
        </span>

      </p>
      <p class='out-wrap'>
        <i>排气口</i>
        <Airoutlet></Airoutlet>
        <span class='pin-box'>
          <pin></pin>
        </span>
      </p>
      <span class='spark-box'>
        <i>火花塞</i>
        <sparlplug></sparlplug>
      </span>
  </div>
  <p class='wrap-bottom'>
      <span class='circle1'></span>
      <span class='circle2'>


      </span>

  </p>
  <span class="Connectingrod" width="600" height="400"></span>
  <button type="button" name="button" class='start' @click='startMove'>开始运动</button>
  <button type="button" name="button" class='stop' @click='stopMove'>停止运动</button>
  <input type="text" name="" v-model='time' placeholder='请输入运动时间' class='inp' @input='inp'>
</div>
</template>

<script>
// import { mapGetters } from 'vuex'
// function conColor (txt) {
//   console.log(`%c${txt}`, 'background: white; color: red')
// }
import square from '../components/square.vue'
import piston from '../components/piston.vue'
import Airinlet from '../components/Airinlet.vue'
import Airoutlet from '../components/Airoutlet.vue'
import pin from '../components/pin.vue'
import sparlplug from '../components/sparkplug.vue'
export default {
  data () {
    return {
      pin: '',
      int: '',
      out: '',
      piston: '',
      rot: '',
      Connectingrod: '',
      time: 4000,
      timer: null,
      process: '进气冲程'
    }
  },
  created () {
  },
  mounted () {
    this.pin = document.getElementsByClassName('pin-box')
    this.rot = document.getElementsByClassName('wrap-bottom')[0]
    this.piston = document.getElementsByClassName('piston')[0]
    this.Connectingrod = document.getElementsByClassName('Connectingrod')[0]
  },
  methods: {
    Calculation (ele) {
      let left = 0
      let top = 0
      left += ele.offsetLeft
      top += ele.offsetTop
      console.log(top, left)
      return {left, top}
    },
    inp () {
      this.rot.className = 'wrap-bottom'
      this.pin[0].className = 'pin-box'
      this.pin[1].className = 'pin-box'
      this.piston.className = 'piston'
      this.Connectingrod.className = 'Connectingrod'
      this.rot.style.animation = ''
      this.Connectingrod.style.animation = ''
      this.piston.style.animation = ''
      window.clearInterval(this.timer)
    },
    startMove () {
      console.log(this.pin[0])
      // this.pin[0].className += ' pinOpen'
      this.time = parseFloat(this.time)
      this.rot.className += ' wrap-bottom-rotate'
      this.rot.style.animation = `rota360 ${this.time / 1000}s linear infinite`
      this.piston.className += ' piston-move'
      this.piston.style.animation = `movetopTobottom ${this.time / 1000}s linear infinite`
      this.Connectingrod.className += ' Connectingrod-move'
      this.Connectingrod.style.animation = `rotateAndmove ${this.time / 1000}s linear infinite`
      var time = 0
      console.log(this.time)
      this.timer = window.setInterval(() => {
        if (time >= 0 && time < (this.time / 2)) {
          this.pin[0].className = 'pin-box pinOpen'
          this.process = '进气冲程'
        } else if (time >= (this.time * 1.5) && time < (this.time * 2)) {
          this.pin[1].className = 'pin-box pinOpen'
          this.process = '排气冲程'
        } else if (time >= this.time && time < (this.time) * 1.5) {
          this.process = '做功冲程'
        } else {
          this.process = '压缩冲程'
          this.pin[0].className = 'pin-box'
          this.pin[1].className = 'pin-box'
        }
        if (time >= (this.time * 2)) {
          time = 0
        }
        time += 10
      }, 10)
    },
    stopMove () {
      this.inp()
    }
  },
  components: {
    square,
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
  #mycanvas{
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
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
     top: -25px;
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
     top: 255px;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     width: 100px;
     height: 100px;
     border-radius: 50%;
     border: 1px solid black;
     transition:transform .5s linear;
     z-index: 5;

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
   .circle2{
     top: -10px;
     margin-left: -15px;
     left: 50%;
     width: 30px;
     height: 30px;
     z-index: 1;
   }
  //  .wrap-bottom-rotate90{
  //   transform: rotate(90deg);
  //  }
  //  .wrap-bottom-rotate180{
  //   transform: rotate(180deg);
  //  }
  //  .wrap-bottom-rotate270{
  //   transform: rotate(270deg);
  //  }
  //  .wrap-bottom-rotate360{
  //   transform: rotate(360deg);
  //  }
  .wrap-bottom-rotate{
    animation: rota360 4s linear infinite;
  }
  @keyframes rota360 {
    0%   {transform: rotate(0deg)}
    25%  {transform: rotate(90deg)}
    50%  {transform: rotate(180deg)}
    75%  {transform: rotate(270deg)}
    100% {transform: rotate(360deg)}
  }
  .Connectingrod{
    display: block;
    position: relative;
    top:-30px;
    z-index: 4;
    width: 10px;
    height: 170px;
    background: black;

  }
  .Connectingrod-move{
    animation: rotateAndmove 4s linear infinite;
    transform-origin:50% 0%;
  }
  .piston-move{
    animation: movetopTobottom 4s linear infinite;
  }

  @keyframes movetopTobottom {
    0%   {top:25px}
    50% { top: 125px}
    100% {top: 25px}
  }
  @keyframes rotateAndmove {
    0%   {top:-30px;transform: rotate(0);}
    12%   {top:0px;transform: rotate(-9deg);}
    25% { top: 30px;transform: rotate(-18deg)}
    37%   {top:55px;transform: rotate(-9deg);}
    50% {top: 80px;transform: rotate(0deg)}
    62%   {top:55px;transform: rotate(9deg);}
    75% {top: 30px;transform: rotate(18deg)}
    87%   {top:0px;transform: rotate(9deg);}
    100% {top: -30px;transform: rotate(0deg)}
  }

  .pinOpen{
    top: -20px;
  }
  .start{
    position: absolute;
    left:-100px;
    top:50px;
    height: 20px;
    line-height: 20px;
    width: 80px;
    font-size: 16px;
    color:#999;
  }
  .stop,.inp{
    position: absolute;
    left:-100px;

    height: 20px;
    line-height: 20px;
    width: 80px;
    font-size: 16px;
    color:#999;
  }
  .inp{
    top: 400px;
  }
  .int-wrap>i{
    position: absolute;
    left: 0;
    z-index: 10;
  }
  .out-wrap>i {
    position: absolute;
    right: 0;
        z-index: 10;
  }
  .spark-box>i{
    position: absolute;
    top: -20px;
    width: 100px;
    left: -50px;
  }
.process{
  position: absolute;
  top: 23px;
  width: 100px;
  left: -10px;


}
</style>
