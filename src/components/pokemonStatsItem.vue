<template>
  <div class="pokemon_stats_item">
    <div class="pokemon_stats_item__title">
      {{ statsItem.stat.name | capitalize }} / {{ statsItem.base_stat }}
    </div>
    <progress
      class="pokemon_stats_item__value"
      max="100"
      :value="statsItem.base_stat"
    ></progress>
  </div>
</template>

<script>
export default {
  props: ["statsItem"],
};
</script>

<style lang="scss">
.pokemon_stats_item {
  margin-bottom: 10px;
  &__value {
    width: 100%;
    border-radius: 0;
    height: 10px;
    &::-webkit-progress-bar {
      background: #fff;
    }
    &::-webkit-progress-value {
      background: #30a7d7;
    }
  }
}
</style>
