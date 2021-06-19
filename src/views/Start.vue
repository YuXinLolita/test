<template>
    <div>

        
        <button @click="start">开始任务</button>
        
    </div>
</template>

<script>
import { defineComponent, ref, onMounted ,onUnmounted} from 'vue'
import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
        
        onUnmounted(() => {
            console.log("onUnmonted");
        })

        // console.log(111);

        let router = useRouter()
        //let route = useRoute()
        
        let name = ref("Jack");
        let num = ref(10);
        let obj = ref({
            student:"Tom"

        })

        onMounted(() => {
            console.log('onMounted');
        })
        console.log("setup");

        let start = () => {
            router.push({
                name: "Home",
                params:{
                    name: name.value,
                    num: num.value,
                    obj: JSON.stringify(obj.value)
                }
            });
        }

        return {
            start,
            
        }

    },
})
</script>