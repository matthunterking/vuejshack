<template>
  <div>
    <h1>Show page</h1>
    <p>#{{ pokemon.id }}</p>
    <p>{{ pokemon.name }}</p>
    <p>Weight: {{ pokemon.weight }} Height: {{ pokemon.height }}</p>
    <img v-bind:src='pokemon.sprites.front_default' />
    <p>{{ pokemon.types[0].type.name }} - {{ pokemon.types[1].type.name }}</p>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  data () {
    return {
      pokemon: {}
    }
  },

  mounted () {
    console.log(this.$route.params.id)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`) // eslint-disable-next-line
      .then(res => this.pokemon = res.data)
  }
}

</script>

<style>
</style>
