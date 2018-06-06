<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Index v-bind:pokemon="pokemon"/>
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'app',
  components: {
    Index
  },
  data () {
    return {
      pokemon: [{
        name: 'Alexamon',
        type: 'fire'
      }, {
        name: 'Mattamon',
        type: 'Electric'
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
