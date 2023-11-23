<template>
    <div class="bijouxRow">
        <h2 class="title">Nos collier</h2>
        <div class="wapperCard">
            <bijoux-card v-for="(card, index) in 3" :key="index"/>
        </div>
    </div>
  
</template>

<script>
import bijouxCard from './bijouxCard.vue';
export default {
    components:{
        bijouxCard,
    }
    

}
</script>

<style>

.wapperCard{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

</style>