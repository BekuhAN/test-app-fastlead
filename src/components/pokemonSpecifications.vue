<template>
  <div class="pokemon_specifications">
    <div class="pokemon_specifications__item">
      <div class="pokemon_specifications__item__title">Height</div>
      <div class="pokemon_specifications__item__value">
        {{ (pokemon.height / 10).toFixed(1) }} m
      </div>
    </div>
    <div class="pokemon_specifications__item">
      <div class="pokemon_specifications__item__title">Weight</div>
      <div class="pokemon_specifications__item__value">
        {{ (pokemon.weight / 10).toFixed(1) }} kg
      </div>
    </div>
    <div class="pokemon_specifications__item">
      <div class="pokemon_specifications__item__title">Species</div>
      <div class="pokemon_specifications__item__value">
        {{ pokemon.species.name | capitalize }}
      </div>
    </div>
    <div class="pokemon_specifications__item">
      <div class="pokemon_specifications__item__title">Abilities</div>
      <div
        class="pokemon_specifications__item__value"
        v-for="(item, index) in pokemon.abilities"
        :key="index"
        v-show="!item.is_hidden"
      >
        {{ item.ability.name | capitalize }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
};
</script>

<style lang="scss">
.pokemon_specifications {
  background: #30a7d7;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  padding-bottom: 15px;
  &__item {
    margin-bottom: 10px;
    flex: 0 0 50%;
    width: 50%;
    padding: 0 15px;
    &__title {
      margin-bottom: 10px;
    }
    &__value {
      color: #000;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
}
</style>
