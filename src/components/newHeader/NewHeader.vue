<template>
    <div>
        <input type="text" placeholder="请输入任务名称" v-model="value">
    </div>
</template>
<script>
import { defineComponent, ref} from "vue";
export default  defineComponent ({
    name:"NewHeader",
    setup() {
        let value = ref("请输入任务名称");
        return{
            value,
        }
    }
})

</script>
<style scoped >

</style>
