<template>
  <div :class="type.name" class="pokemon_types_item">
    {{ type.name | capitalize }}
  </div>
</template>

<script>
export default {
  props: ["type"],
  name: "PokemonTypesItem",
};
</script>

<style lang="scss">
.pokemon_types_item {
  padding: 5px;
  border-radius: 5px;
  text-align: center;
}
</style>
