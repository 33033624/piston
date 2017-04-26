<template>
<div class="hello">
  <ul>
    <li @click='mutation'>点击我mutations触发</li>
    <li @click='action'>点击我actions触发</li>
  </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
function conColor (txt) {
  console.log(`%c${txt}`, 'background: white; color: red')
}
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    conColor('通过mapGetters获取到vuex中的paramOne ----->' + this.paramOne)
  },
  computed: {
    ...mapGetters(['paramOne'])
  },
  methods: {
    mutation () {
      this.$store.commit('paramOne', 4)
      conColor("执行this.$store.commit('paramOne', 4)---->" + this.paramOne)
    },
    action () {
      this.$store.dispatch('paramOne', 7)
      conColor("this.$store.dispatch('paramOne', 7)" + this.paramOne)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
   li{
     height: 40px;
     margin-top: 20px;
     font-size: 16px;
   }
</style>
