
<script>
import { ref } from 'vue' 
import BijouxRow from '../components/BijouxRow.vue'
import {data} from "@/BDD"


export default {
  components:{
    BijouxRow
  },
  setup(){
    class Bijou {
      constructor(name,img,price,info){
        this.name = name
        this.price = price
        this.img = img
        this.info = info
      }
    }

    var bij = new Bijou ('collier6', 'img', '88€' ,'hhhhhhh')
    console.log(bij);
  }

}



</script>

<template>
  <main>
    <BijouxRow/>
    
   
  </main>
</template>

<style>

</style>