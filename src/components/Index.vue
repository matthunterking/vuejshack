<template>
  <div>
    <h1>Poke-Vue</h1>
    <p>Created By Matt and Alex</p>
    <div v-for="pokemon in pokemon">
      <p>{{pokemon.name}}</p>
      <p>{{pokemon.type}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['pokemon'],
}

</script>

<style>
</style>
