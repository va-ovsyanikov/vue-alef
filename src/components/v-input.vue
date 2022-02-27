<template>
  <div class="field">
    <label>{{ label }}</label>
    <input
      :value="modelValue"
      type="text"
      @input="$emit('update:modelValue', $event.target.value)"
    />

  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    modelValue: String,
    label: String,
  },
});
</script>
<style lang="less" scoped>
.field {
  position: relative;
  label {
    position: absolute;
    left: 16px;
    top: 10px;
    color: @color_gray;
    font-size: 13px;
    line-height: 16px;
  }
}
input {
  padding: 33px 6px 6px 16px;
  border-radius: 4px;
  border: @border_gray;
  width: 100%;
  font-size: 14px;
  color: @color_black;
  &:focus {
    outline: @border_blue;
  }
}
</style>
