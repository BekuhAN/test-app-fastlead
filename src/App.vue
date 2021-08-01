<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #212121;
  background: #fff url("./assets/img/container_bg.png");
  padding: 50px 0px;
  min-height: 100vh;
}
.container {
  width: 1140px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 960px;
  }
  @media (max-width: 768px) {
    width: 700px;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
}

.bug {
  background: #729f3f;
}
.dragon {
  background: -webkit-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: -ms-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: -moz-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: -o-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background-color: #53a4cf;
}
.fairy {
  background: #fdb9e9;
  color: #212121;
}
.fire {
  background: #fd7d24;
}
.ghost {
  background: #7b62a3;
}
.ground {
  background: -webkit-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: -ms-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: -moz-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: -o-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background-color: #f7de3f;
  color: #212121;
}
.normal {
  background: #a4acaf;
}
.psychic {
  background: #f366b9;
}
.steel {
  background: #9eb7b8;
}
.dark {
  background: #707070;
}
.electric {
  background: #eed535;
  color: #212121;
}
.fighting {
  background: #d56723;
}
.flying {
  background: -webkit-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: -ms-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: -moz-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: -o-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background-color: #3dc7ef;
  color: #212121;
}
.grass {
  background: #9bcc50;
  color: #212121;
}
.ice {
  background: #51c4e7;
  color: #212121;
}
.poison {
  background: #b97fc9;
}
.rock {
  background: #a38c21;
}
.water {
  background: #4592c4;
}
</style>
