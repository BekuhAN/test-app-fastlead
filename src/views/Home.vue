<template>
  <section class="pokemon_list">
    <div class="container pokemon_list__wrapper" v-if="getPokemons">
      <PokemonCard
        v-for="(item, index) in getFilteredPokemons"
        :key="index"
        :item="item"
        class="pokemon_list__item"
      />
    </div>
    <Pagination :pages="pages" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PokemonCard from "../components/pokemonCard.vue";
import Pagination from "../components/pagination.vue";
export default {
  name: "Home",
  data() {
    return {
      pages: {
        countPage: 0,
        activePage: 0,
      },
    };
  },
  beforeMount() {
    this.fetchData();
  },
  computed: {
    ...mapGetters(["getPokemons", "getFilteredPokemons"]),
  },
  methods: {
    ...mapActions(["setPokemons", "setFilteredPokemons"]),
    sortedPages(count) {
      this.pages.countPage = Math.round(count / 10);
      this.pages.activePage = this.$route.params.page;
    },
    async fetchData() {
      await this.setPokemons({
        limit: 10,
        offset: (this.$route.params.page - 1) * 10,
      });
      this.setFilteredPokemons(this.getPokemons.results);
      this.sortedPages(this.getPokemons.count);
    },
  },
  components: { PokemonCard, Pagination },
  watch: {
    $route: "fetchData",
  },
};
</script>
<style lang="scss">
.pokemon_list {
  &__wrapper {
    background: rgba(#000, 0.6);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    flex: 0 0 25%;
    width: 25%;
    padding: 0 15px;
    @media (max-width: 1024px) {
      flex: 0 0 33.33333%;
      width: 33.33333%;
    }
    @media (max-width: 768px) {
      flex: 0 0 50%;
      width: 50%;
    }
    @media (max-width: 576px) {
      flex: 0 0 100%;
      width: 100%;
    }
  }
}
</style>
