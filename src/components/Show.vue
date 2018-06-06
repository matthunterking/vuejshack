<template>
  <div>
    <h1>Show page</h1>
    <p>{{ pokemon.name }}</p>
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
    axios
      .get('https://pokeapi.co/api/v2/pokemon/91/')
      .then(res => this.pokemon = res.data);
  }
}

</script>

<style>
</style>
