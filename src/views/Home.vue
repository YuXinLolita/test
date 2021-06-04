<template>
  <div class="body">
    <new-header></new-header>
    <new-main></new-main>
    <new-footer></new-footer>
  </div>
</template>
<script>
import NewHeader from "@/components/newHeader/NewHeader.vue";
import NewMain from "@/components/newMain/NewMain.vue";
import NewFooter from "@/components/newFooter/NewFooter.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "home",
  components: {
    NewHeader,
    NewMain,
    NewFooter,
  },
  setup() {
    
   
  },
});
</script>

<style scoped>

</style>
