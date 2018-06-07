<template>
  <div>
    <hr />
    <h1 class='title is-1'>{{ this.pokemon.name }}</h1>
    <hr />
    <div class='columns'>
      <div class="column">
        <img v-bind:src='this.pokemon.sprites.front_default' />
      </div>
      <div class="column">
        <p :class=this.pokemon.types[0].type.name>{{ this.pokemon.types[0].type.name }}</p>
        <div v-if='pokemon.types.length === 2'>
          <p :class=this.pokemon.types[1].type.name>{{pokemon.types[1].type.name}}</p>
        </div>
        <p>Weight: {{ this.pokemon.weight }} Height: {{ this.pokemon.height }}</p>
            <div v-bind:key='pokemon.stat' v-for="stat in pokemon.stats">
              <p>{{ stat.stat.name }} - {{ stat.base_stat }}</p>
            </div>
            <router-link to='/'>Back</router-link>
        </div>
      </div>
    </div>
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
      .get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`) // eslint-disable-next-line
      .then(res => this.pokemon = res.data)
  }
}

</script>

<style>
img {
  width: 40%;
}

div {
  font-size: 26px;
}

.fire {
  background-color: #EE8130;
  color: white;
}

.grass {
  background-color: #7AC74C;
  color: black;
}

.poison {
  background-color: #A33EA1;
  color: white;
}
.water {
  background-color: #6390F0;
  color: white;
}
.electric {
  background-color: #F7D02C;
  color: black;
}
.ice {
  background-color: #96D9D6;
  color: black;
}
.fighting {
  background-color: #C22E28;
  color: white;
}
.ground {
  background-color: #E2BF65;
  color: black;
}
.flying {
  background-color: #A98FF3;
  color: white;
}
.psychic {
  background-color: #F95587;
  color: white;
}
.bug {
  background-color: #A6B91A;
  color: black;
}
.rock {
  background-color: #B6A136;
  color: black;
}
.ghost {
  background-color: #735797;
  color: black;
}
.dragon {
  background-color: #6F35FC;
  color: black;
}
.fairy {
  background-color: #D685AD;
  color: black;
}
.dark {
  background-color: #705746;
  color: white;
}
.steel {
  background-color: #B7B7CE;
  color: white;
}
.normal {
  background-color: brown;
  color: white;
}

</style>
