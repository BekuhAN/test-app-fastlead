<template>
  <div class="pagination">
    <div class="pagination__list">
      <router-link to="/page1" class="pagination__item">1</router-link>
      <div class="pagination__space" v-if="activePage > 4">...</div>
      <router-link
        :to="'/page' + (activePage - 2)"
        class="pagination__item"
        v-if="activePage - 2 > 1"
      >
        {{ activePage - 2 }}
      </router-link>
      <router-link
        :to="'/page' + (activePage - 1)"
        class="pagination__item"
        v-if="activePage - 1 > 1"
      >
        {{ activePage - 1 }}
      </router-link>
      <router-link
        :to="'/page' + activePage"
        class="pagination__item"
        v-if="activePage > 1 && activePage < pages.countPage"
      >
        {{ activePage }}
      </router-link>
      <router-link
        :to="'/page' + (activePage + 1)"
        class="pagination__item"
        v-if="activePage + 1 < pages.countPage"
      >
        {{ activePage + 1 }}
      </router-link>
      <router-link
        :to="'/page' + (activePage + 2)"
        class="pagination__item"
        v-if="activePage + 2 < pages.countPage"
      >
        {{ activePage + 2 }}
      </router-link>
      <div class="pagination__space" v-if="activePage < pages.countPage - 3">
        ...
      </div>
      <router-link :to="'/page' + pages.countPage" class="pagination__item">{{
        pages.countPage
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pages"],
  data() {
    return {};
  },
  computed: {
    activePage() {
      if (this.pages) {
        return parseInt(this.pages.activePage, 10);
      }
      return "";
    },
  },
};
</script>

<style lang="scss">
.pagination {
  margin-top: 50px;
  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__space {
    font-weight: bold;
    margin: 0px 10px;
  }
  &__item {
    margin: 0px 10px;
    background: rgba(#000, 0.6);
    text-decoration: none;
    color: #fff;
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    @media (max-width: 576px) {
      font-size: 14px;
      width: 30px;
      height: 30px;
      margin: 0px 5px;
    }
    &:hover {
      background: #aaa;
    }
    &.router-link-exact-active {
      background: #aaa;
    }
  }
}
</style>
