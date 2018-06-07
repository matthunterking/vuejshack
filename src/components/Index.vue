<template>
  <div>
    <h1 class="title is-1">Poké<span>Vue</span></h1>
    <p class="title is-2">Created By Matt and Alex</p>
    <div class="columns">
      <div class="column">
        <img src="../assets/logo.png">
      </div>
      <div class="column">
        <hr />
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-bind:key='pokemon.name' v-for="pokemon in sorted(pokemon)">
            <p>{{pokemon.url.slice(42).replace('/', '')}}</p>
            <p>{{pokemon.name}}</p>
            <router-link :to="'/show/' + pokemon.url.slice(42).replace('/', '')">More info</router-link>
          </div>
        </div>
        <hr />
      </div>
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

  methods: {
    sorted: function (pokemon) {
      return pokemon.sort((a, b) => a.url.slice(42).replace('/', '') - b.url.slice(42).replace('/', ''))
    }
  },

  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/generation/1') // eslint-disable-next-line
      .then(res => this.pokemon = res.data.pokemon_species)
  }
}

</script>

<style>
.title {
  color: #ffcb05;
}
a {
  color: #c7a008;
}

p {
  font-weight: bold;
}

span {
  color: #42b883;
  text-shadow: 3px 3px 5px #35495e;
}
</style>
