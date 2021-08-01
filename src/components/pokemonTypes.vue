<template>
  <div class="pokemon_types">
    <div class="pokemon_types__title">Type</div>
    <div class="pokemon_types__list">
      <div
        class="pokemon_types__wrapper"
        v-for="(item, index) in types"
        :key="index"
      >
        <PokemonTypesItem :type="item.type" />
      </div>
    </div>
  </div>
</template>

<script>
import PokemonTypesItem from "./pokemonTypesItem.vue";
export default {
  props: ["types"],
  name: "PokemonTypes",
  components: { PokemonTypesItem },
};
</script>

<style lang="scss">
.pokemon_types {
  padding: 0px 15px;
  &__title {
    font-size: 18px;
    text-align: center;
    margin-bottom: 15px;
  }
  &__list {
    flex-wrap: wrap;
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
  }
  &__wrapper {
    flex: 0 0 33.33333%;
    width: 33.33333%;
    padding: 0 15px;
  }
}
</style>
