<template>
  <div>
    <h1>Poke-Vue</h1>
    <p>Created By Matt and Alex</p>
    <div v-bind:pokemon='pokemon'>
      <p>{{pokemon.name}}</p>
      <p>{{pokemon.type}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  data() {
    return {
      pokemon: []
    };
  },

  mounted() {
    axios
      .get('https://pokeapi.co/api/v2/generation/1')
      .then(res => this.pokemon = res.data.pokemon_species)
      .then(console.log('--->', this.pokemon));
  }
};

</script>

<style>
</style>
