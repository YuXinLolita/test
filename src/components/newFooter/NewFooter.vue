<template>
    <div class="container">
        <div>已完成{{isComplete}}/全部{{list.length}}</div>
        <div class="btn">
            <button v-if="isComplete > 0" @click="clear">删除已完成</button>
        </div>
    </div>
</template>
<script>
import { defineComponent,  computed} from "vue";
export default  defineComponent ({
    name:"NewFooter",
    props:{
        list:{
            type: Array,
            required:true,
        }
    },
    setup(props, ctx) {
        let isComplete = computed( () => {
            let arr = props.list.filter( item => {
                return item.complete 
            })
            return arr.length
        });
        
        console.log(isComplete.value);
        
        let clear = () => {
            let arr = props.list.filter( item => {
                return item.complete === false
            })
            ctx.emit("clear",arr);
           // console.log("clear");
        }

        return {
            isComplete,
        
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
