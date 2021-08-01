<template>
  <div class="pokemon_stats">
    <div class="pokemon_stats__title">Stats</div>
    <div class="pokemon_stats__list">
      <PokemonStatsItem
        v-for="(item, index) in stats"
        :key="index"
        :statsItem="item"
      />
    </div>
  </div>
</template>

<script>
import PokemonStatsItem from "./pokemonStatsItem.vue";
export default {
  props: ["stats"],
  components: {
    PokemonStatsItem,
  },
};
</script>

<style lang="scss">
.pokemon_stats {
  background: #4dad5b;
  border-radius: 10px;
  padding: 15px;
  &__title {
    margin-bottom: 15px;
    text-align: center;
    font-size: 18px;
  }
}
</style>
