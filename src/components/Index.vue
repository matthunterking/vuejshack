<template>
  <div>
    <h1>Poke-Vue</h1>
    <p>Created By Matt and Alex</p>
    <div v-bind:key='pokemon.name' v-for="pokemon in pokemon">
      <hr />
      <div>
        <p>{{pokemon.url.slice(42).replace('/', '')}} - {{pokemon.name}}</p>
        <router-link :to="{ path: '/show', params: { id: 35 } }">More info</router-link>
      </div>
      <hr />
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      pokemon: []
    }
  },

  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/generation/1') // eslint-disable-next-line
      .then(res => this.pokemon = res.data.pokemon_species) 
  },
  methods: {
    goShow () {
      this.$router.push('/show/1')
    }
  }
}

</script>

<style>
</style>
