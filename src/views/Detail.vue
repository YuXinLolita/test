<template>
    <div>
        这是detail组件
    
    <child :msg="msg" @send="send"></child>

         <button @click="back">上一页</button>
    </div>
</template>



<script>
import { defineComponent, ref} from 'vue'
import { useRouter } from "vue-router";
//import child from '../components/Child/Child.vue';
import  child from "../components/child/Child";

export default defineComponent({
  components: { child },

  
     name:"Detail",

    

    setup() {
        
        let msg = ref("这是父组件的数据！");

        let router = useRouter();

        let back = () => {
            router.go(-1);
        }


        let send = (val) => {
            console.log(val);
        }

        return {
            back,
            msg,
            send
        }

    },
})
</script>
