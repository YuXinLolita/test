<template>
    <div class="container">
        <div>已完成{{isComplete}}/全部{{all}}</div>
        <div class="btn">
            <button v-if="isComplete > 0" @click="clear">删除已完成</button>
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
        
        let clear = () => {
            console.log("clear");
        }

        return {
            isComplete,
            all,
            clear
        }
    }
})


</script>
<style scoped>
.container {
    display: flex;
    align-items: center;
    
}
.btn {
    margin-left: 10px;
}

</style>
