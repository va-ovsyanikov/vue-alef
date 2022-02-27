<template>
  <div class="header">
    <router-link class="logo" to="/form">
      <img src="../assets/logo.png" alt="alef" />
    </router-link>
    <div class="nav">
      <router-link v-for="item in list" :key="item" :to="item.path">{{item.title}}</router-link>
    </div>
  </div>
</template>
<script lang="ts">
interface LinkInterface{
  title:string,
  path:string
}
import { defineComponent } from "vue";
export default defineComponent({
  data(){
    return{
      list:[
        {title:"Форма", path:"/"},
        {title:"Превью", path:"/preview"}
      ] as LinkInterface[]
    }
  }
});
</script>
<style lang="less" scoped>
.header{
  min-height: 76px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 94px;
  margin: 0 auto;
}
.nav {
  margin: 0 auto;
  a {
    color: @color_gray;
    text-decoration: none;
    font-size: 14px;
    line-height: 24px;
  }
  a + a {
    margin-left: 24px;
  }
}
</style>
