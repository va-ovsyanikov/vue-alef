<template>
  <div class="preview">
    <div class="person">
      <h4>Персональные данные</h4>
      <v-item-preview>{{ data.person?.name }}, {{ data.person?.age }}</v-item-preview>
    </div>
    <div class="children">
      <h4>Дети</h4>
      <div v-for="item in data?.children" :key="item">
        <v-item-preview :isChild="true">{{ item.name }}, {{ item.age }}</v-item-preview>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import vItemPreview from '../components/v-item-preview.vue'
export default defineComponent({
  name: "AboutView",
  components:{
    vItemPreview
  },
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    // if(this.$route.params.data ){
    // this.data = JSON.parse(this.$route.params.data as string)
    // console.log(this.data)
    // }

    if (localStorage.getItem("data")) {
      try {
        this.data = JSON.parse(localStorage.getItem("data") as string);
      } catch (e) {
        localStorage.removeItem("data");
      }
    }
  },
});
</script>
<style lang="less" scoped>
.person {
  margin-bottom: 55px;
}
h4 {
  margin-bottom: 20px;
  .titleMixin;
}

</style>
