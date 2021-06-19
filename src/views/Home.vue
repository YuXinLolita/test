<template>
  <div>
    <div >
      <new-header @add="add"></new-header>
    <new-main :list="list" @del="del"></new-main>
    <new-footer :list="list" @clear="clear"></new-footer>

    </div>
    
  <button @click="back">跳到about</button>
    <button @click="toback">回到上一页</button>
    <!-- {{list}} -->
    <!-- {{num1}} --- {{num2}}
    两个数的和{{addNum}}
    <button @click="add">add</button> -->
    
    <!-- {{num}}---{{name}}---{{obj}} -->
  </div>
  
</template>
<script>
import NewHeader from "@/components/newHeader/NewHeader.vue";
import NewMain from "@/components/newMain/NewMain.vue";
import NewFooter from "@/components/newFooter/NewFooter.vue";
import { defineComponent,  ref, computed} from "vue";
//import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useStore } from "vuex";
//import About from "./About.vue";

export default defineComponent({
  name: "home",
  components: {
    NewHeader,
    NewMain,
    NewFooter,
  },
  setup() {

    let store = useStore();

    let list = computed( () => {
    return store.state.list
    })
    
    let del = (val) => {
        store.commit("delTodo",val)
        console.log(val);
    }
    //let router = useRouter();
    //let route = useRoute();
    let router = useRouter();
    //console.log(route.params)
    // let name = ref("");
    // let num = ref("");
    // let obj = ref({});
    let newData = ref("");
    // onMounted(() => {
    //   name.value = route.params.name;
    //   num.value = route.params.num * 1 ;
    //   obj.value = JSON.parse(route.params.obj);
      


    // })

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
    
    let add = (val) => {
      newData.value = val;
    let flag = true;
    list.value.map( (item) => {
        if(item.title === newData.value) {
          flag = false;
          alert("任务已存在！");
        }
    })

      if(flag){
          
      store.commit("addTodo",{
        title: newData.value,
        complete: false
      })
      console.log(val);
    } 
      }

      let clear = (val) => {
        store.commit("clear",val)
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
     //name
     //num,
     //obj,
     add,
     newData,
     list,
     del,
     clear

     
   }
  },
});
</script>

<style scoped>

</style>
