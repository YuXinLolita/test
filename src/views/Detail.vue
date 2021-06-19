<template>
    <div>
        这是detail组件
         <button @click="back">上一页</button>
    </div>
</template>



<script>
import { defineComponent } from 'vue'
import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
        
        let router = useRouter();

        let back = () => {
            router.go(-1);
        }

        return {
            back
        }

    },
})
</script>
