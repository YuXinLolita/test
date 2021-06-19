<template>
    <div>
        <input type="text" 
        placeholder="请输入任务名称" 
        v-model="value"
        @keydown.enter="enter"
        >
    </div>
</template>
<script>
import { defineComponent, ref} from "vue";
export default  defineComponent ({
    name:"NewHeader",
    setup(props,ctx) {
        let value = ref("");
        let enter = () => {
            //console.log(value.value);
            ctx.emit("add",value.value) ;
            value.value = "";
        }
        return{
            value,
            enter
        }
    }
})

</script>
<style scoped >

</style>
