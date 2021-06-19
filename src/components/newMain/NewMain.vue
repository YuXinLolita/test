<template>
   <div v-if="list.length > 0">
       <div v-for="(item,index) in list" :key="index">
        <div class="item">
            <input type="checkbox" v-model="item.complete">
            {{item.title}}
            <button class="delete" @click="del(item,index)">删除</button>
        </div>
   </div>
    </div> 
    <div v-else>
        暂无任务
    </div>
</template>
<script>
import { defineComponent  } from "vue";
export default  defineComponent ({
    name:"newMain",
    props:{
        list:{
            type: Array,
            required:true
            
        }
    },

        emits:["del"],
    setup(props,ctx) {

        // let list = ref([
        //     {
        //         title:"吃饭",
        //         complete: false,
        //     },
        //     {
        //         title:"睡觉",
        //         complete: false,
        //     },
        //     {
        //         title:"敲代码",
        //         complete: false,
        //     },
        // ]);

        
        
        let del = (item,index) => {
            ctx.emit("del",index);
            // console.log(item);
            // console.log(index);
        }
        
        return{
            //list,
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
