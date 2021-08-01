import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: null,
    selectedPokemon: null,
    filteredPokemons: null,
  },
  getters: {
    getPokemons(state) {
      return state.pokemons;
    },
    getSelectedPokemon(state) {
      return state.selectedPokemon;
    },
    getFilteredPokemons(state) {
      return state.filteredPokemons;
    },
  },
  mutations: {
    updatePokemons(state, payload) {
      state.pokemons = payload;
    },
    updateSelectedPokemon(state, payload) {
      state.selectedPokemon = payload;
    },
    updateFilteredPokemons(state, payload) {
      state.filteredPokemons = payload;
    },
  },
  actions: {
    async setSelectedPokemon({ commit }, name) {
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + name
      );
      commit("updateSelectedPokemon", result.data);
    },
    async setFilteredPokemons({ commit }, list) {
      let filteredPokemons = [];
      for (let i = 0; i < list.length; i++) {
        const result = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + list[i].name
        );
        filteredPokemons.push(result.data);
      }
      commit("updateFilteredPokemons", filteredPokemons);
    },
    async setPokemons({ commit }, params) {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
        params,
      });
      commit("updatePokemons", data);
    },
  },
});
