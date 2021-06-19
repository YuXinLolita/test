<template>
  <div class="body">
    <new-header></new-header>
    <new-main></new-main>
    <new-footer></new-footer>

    <button @click="back">跳到about</button>
    <button @click="toback">回到上一页</button>
    <!-- {{list}} -->
    <!-- {{num1}} --- {{num2}}
    两个数的和{{addNum}}
    <button @click="add">add</button> -->

    {{num}}---{{name}}---{{obj}}
  </div>
</template>
<script>
import NewHeader from "@/components/newHeader/NewHeader.vue";
import NewMain from "@/components/newMain/NewMain.vue";
import NewFooter from "@/components/newFooter/NewFooter.vue";
import { defineComponent, onMounted, ref } from "vue";
//import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
//import About from "./About.vue";

export default defineComponent({
  name: "home",
  components: {
    NewHeader,
    NewMain,
    NewFooter,
  },
  setup() {

    let router = useRouter();
    let route = useRoute();
    // let router = useRouter();
    //console.log(route.params)
    let name = ref("");
    let num = ref("");
    let obj = ref({});
    onMounted(() => {
      name.value = route.params.name;
      num.value = route.params.num * 1 ;
      obj.value = JSON.parse(route.params.obj);
      


    })

    let toback = () => {
            router.go(-1);
        }

    let back = () => {
      router.push({
        path:"/about",
        // query:[
        //   name,
        //   num1,
        //   num2,
        // ]
      })
    }
    
    // let name = {
    //   name:"jack"
    // };

    // let num1 = ref(10);
    // let num2 = ref(20);
  //   let num1 = ref(10);
  //   let num2 = ref(20);

  //   let addNum = computed( () => {
  
  //     return  num1.value + num2.value ;
  //   });

  //   let addNum = () => {
  //     num1.value + num2.value;
  //   };
  // let addnumber = addNum();
  //   let add = () => {

  //     num1.value++;
  //     num2.value++;
  //   };
   
    // let store = useStore();

    // let list = computed(()=>{
    //   return  store.state.list;
    // })
return {
    //  num1,
    //  num2,
    //  addNum,
    //  add,
    //list,
     back,
     toback,
     name,
     num,
     obj,
   }
  },
});
</script>

<style scoped>

</style>
