<template>
  <section class="about_pokemon" v-if="getSelectedPokemon">
    <div class="container about_pokemon__wrapper">
      <div class="about_pokemon__name">
        {{ getSelectedPokemon.name | capitalize }}
        <span> №{{ getSelectedPokemon.id | filterId }} </span>
      </div>
      <div class="about_pokemon__image">
        <img
          :src="
            getSelectedPokemon.sprites.other['official-artwork'].front_default
          "
        />
      </div>
      <div class="about_pokemon__details">
        <PokemonSpecifications
          class="about_pokemon__details__item"
          :pokemon="getSelectedPokemon"
        />
        <PokemonStats
          class="about_pokemon__details__item"
          :stats="getSelectedPokemon.stats"
        />
        <PokemonTypes :types="getSelectedPokemon.types" />
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import PokemonSpecifications from "../components/pokemonSpecifications.vue";
import PokemonStats from "../components/pokemonStats.vue";
import PokemonTypes from "../components/pokemonTypes.vue";
export default {
  data() {
    return {};
  },
  async beforeMount() {
    await this.setSelectedPokemon(this.$route.params.name);
  },
  computed: {
    ...mapGetters(["getSelectedPokemon", "getWeaknessesSelectedPokemon"]),
  },
  methods: {
    ...mapActions(["setSelectedPokemon", "setWeaknessesSelectedPokemon"]),
  },
  components: {
    PokemonSpecifications,
    PokemonStats,
    PokemonTypes,
  },
};
</script>
<style lang="scss">
.about_pokemon {
  color: #fff;
  &__wrapper {
    background: rgba(#000, 0.6);
    padding: 50px 15px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  &__name {
    text-align: center;
    font-size: 32px;
    margin-bottom: 50px;
    flex: 0 0 100%;
    width: 100%;
    padding: 0 15px;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
  &__image {
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 10px;
    flex: 0 0 50%;
    width: 50%;
    padding: 0 15px;
    @media (max-width: 768px) {
      flex: 0 0 100%;
      width: 100%;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    img {
      transition: 0.2s;
      width: 100%;
    }
  }
  &__details {
    flex: 0 0 50%;
    width: 50%;
    padding: 0 15px;
    @media (max-width: 768px) {
      flex: 0 0 100%;
      width: 100%;
    }
    &__item {
      margin-bottom: 30px;
    }
  }
}
</style>
