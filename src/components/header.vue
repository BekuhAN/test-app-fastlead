<template>
  <header class="logo">
    <router-link to="/page1">
      <img class="logo__image" src="../assets/img/logo.png" />
    </router-link>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 50px;
  &__image {
    width: 200px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
