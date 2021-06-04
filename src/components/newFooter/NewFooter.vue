<template>
    <div>
        <div>已完成{{isComplete}}/全部{{all}}</div>
        <div>
            <button v-if="isComplete > 0">删除已完成</button>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default  defineComponent ({
    name:"NewFooter",
    setup() {
        let isComplete = ref(1);
        let all = ref(3);
        return {
            isComplete,
            all,
        }
    }
})


</script>
<style scoped>

</style>
