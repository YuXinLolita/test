<template>
    <div>这是child组件</div>
    <div>这是父组件传递过来的数据：{{msg}}
        <button @click="send">传值给父组件 </button>
    </div>
</template>

<script>
import { defineComponent, ref ,onMounted} from 'vue'
//import {  } from "";

export default defineComponent({
    name:"child",
    props:{
        msg:{
            type:String,
            //required:true,默认是false
            //default:"默认值",
        }
    },
    setup(props,ctx) {
        console.log(props.msg);
        let childData = ref("我是子组件数据！");
        let childNum = ref(10);

        let send = () => {
            ctx.emit("send",[childData.value,childNum.value]);
        }
        onMounted(() => {
            ctx.emit("send",{
                childData: childData.value,
                childNum: childNum.value,
            });
        })

        return {
            childData,
            send,
        }
    },
})
</script>
