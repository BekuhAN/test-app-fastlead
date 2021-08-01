<template>
  <router-link :to="'/pokemon/' + item.name" class="pokemon_card">
    <div class="pokemon_card__wrapper">
      <div class="pokemon_card__image">
        <div class="pokemon_card__image__wrapper" :data-id="item.id | filterId">
          <img :src="item.sprites.other['official-artwork'].front_default" />
        </div>
      </div>
      <div class="pokemon_card__description">
        <div class="pokemon_card__title">
          <div class="pokemon_card__title__name">
            {{ item.name | capitalize }}
          </div>
          <div class="pokemon_card__title__id">{{ item.id | filterId }}</div>
        </div>
        <div class="pokemon_card__detail">
          <div class="pokemon_card__detail__item">
            <div class="pokemon_card__detail__title">Type</div>
            <div class="pokemon_card__detail__list">
              <PokemonTypesItem
                v-for="(type, index) in item.types"
                :key="index"
                :type="type.type"
                class="pokemon_card__types_item"
              />
            </div>
          </div>
          <div class="pokemon_card__detail__item">
            <div class="pokemon_card__detail__title">Abilities</div>
            <div class="pokemon_card__detail__list">
              <div
                class="pokemon_card__abilities_item"
                v-for="({ ability }, index) in item.abilities"
                :key="index"
                v-show="!item.is_hidden"
              >
                {{ ability.name | capitalize }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import PokemonTypesItem from "./pokemonTypesItem.vue";
export default {
  props: ["item"],
  components: {
    PokemonTypesItem,
  },
};
</script>

<style lang="scss">
.pokemon_card {
  width: 100%;
  background: #eee;
  text-decoration: none;
  color: #212121;
  border: 1px solid #e2e2e2;
  border-bottom: none;
  margin-left: -1px;
  margin-top: -1px;
  transition: 0.2s;
  $this: &;
  &:hover {
    transform: scale(1.05);
    z-index: 10;
    #{$this}__title {
      &__id {
        display: block;
      }
    }
    #{$this}__image {
      &__wrapper {
        img {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }
    #{$this}__detail {
      height: 100px;
    }
  }
  &__image {
    padding: 15px;
    overflow: hidden;
    &__wrapper {
      position: relative;
      min-height: 220px;
      z-index: 2;
      &::before {
        content: attr(data-id);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 90px;
        font-weight: bold;
        color: #b2b2b2;
        z-index: -1;
      }
      img {
        width: 100%;
        z-index: 2;
        opacity: 0.8;
        transition: 0.2s;
      }
    }
  }
  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    &__id {
      display: none;
    }
  }
  &__description {
    background: #aaa;
    margin: 0 -15px;
    padding: 15px;
    height: 48px;
    transition: 0.2s;
    position: relative;
  }
  &__detail {
    position: absolute;
    margin-top: -1px;
    margin-left: -1px;
    height: 0;
    overflow: hidden;
    left: 0;
    background: #aaa;
    border: 1px solid #e2e2e2;
    border-top: none;
    width: calc(100% + 2px);
    transition: 0.2s;
    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    &__title {
      font-weight: bold;
      flex: 0 0 25%;
      width: 25%;
      padding: 0 15px;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 75%;
      width: 75%;
      padding: 0 15px;
    }
  }
  &__types_item {
    margin-right: 10px;
  }
  &__abilities_item {
    margin-right: 15px;
    position: relative;
    word-wrap: none;
    &::after {
      position: absolute;
      content: "/";
      top: 50%;
      right: -10px;
      color: #fff;
      transform: translateY(-50%);
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>
