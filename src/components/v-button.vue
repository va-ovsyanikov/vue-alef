<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    img: String,
    isPrimary: {
      type: Boolean,
      default: false,
    },
    isSimply: {
      type: Boolean,
      default: false,
    },
    isSecondary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return {
        primary: this.isPrimary,
        simply: this.isSimply,
        secondary: this.isSecondary,
      };
    },
  },
});
</script>
<style lang="less" scoped>
button {
  border-radius: 100px;
  padding: 10px 20px;
  border: @border_blue;
  background-color: #fff;
  font-size: 14px;
  height: 44px;
  color: @color_blue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  letter-spacing: 0.03em;
}
.secondary {
  &:hover {
    background-color: @color_blue;
    color: #fff;
  }
}
.primary {
  background-color: @color_blue;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: @color_blue;
  }
}
.simply {
  border: none;
  padding: 5px 0;
}
</style>
