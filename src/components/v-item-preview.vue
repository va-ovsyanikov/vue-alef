<template>
  <span :class="{ children__item: isChild }">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isChild: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style lang="less" scoped>
span {
  color: @color_black;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
}
.children__item {
  background-color: @bg_gray;
  padding: 10px 20px;
  height: 44px;
  margin-bottom: 20px;
}
</style>
