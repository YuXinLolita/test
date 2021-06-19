<template>
   <div v-for="(item,index) in list" :key="index">
        <div class="item">
            <input type="checkbox" v-model="item.compete">
            {{item.title}}
            <button class="delete" @click="del(item,index)">删除</button>
        </div>
    </div> 
</template>
<script>
import { defineComponent, ref } from "vue";
export default  defineComponent ({
    name:"NewMain",
    setup() {
        let list = ref([
            {
                title:"吃饭",
                complete: false,
            },
            {
                title:"睡觉",
                complete: false,
            },
            {
                title:"敲代码",
                complete: false,
            },
        ]);

        let del = (item,index) => {
            console.log(item);
            console.log(index);
        }
        
        return{
            list,
            del
        }
    }
})

</script>
<style scoped>
.item{
    height: 35px;
    line-height: 35px;
    position: relative;
    
}
</style>
