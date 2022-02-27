<template>
  <div class="app">
    <div class="app__top">
      <v-header></v-header>
    </div>
    <div class="app__center">
      <router-view />
    </div>
    <div class="app__bottom">
      <v-footer></v-footer>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import vHeader from "./components/v-header.vue";
import vFooter from "./components/v-footer.vue";
export default defineComponent({
  components: {
    vHeader,
    vFooter
  },
});
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  background: #f2f2f2;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

.app {
  max-width: 1366px;
  margin: 0 auto;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
}
.app__top {
  box-shadow: @box_shadow;
}
.app__center {
  max-width: 616px;
  min-height: 616px;
  margin: 0 auto;
  padding: 30px 0 136px;
}
</style>
