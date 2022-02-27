<template>
    <div class="footer">
        <span>Все права защищены</span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 
})
</script>
<style lang="less" scoped>
.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 76px;
    background-color:#FAFAFA;
    box-shadow: @box_shadow;
    span{
        font-size: 13px;
        line-height: 16px;
        font-weight: 400;
    }
}
</style>
