<template>
  <div class="bijouxcard">
    <div class="bijouximg">
        

    </div>
    <div class="bijouxInfo">
        <div class="top">
            <p>collier 1</p>
            
             <p class="price">
                <span>60€</span>
            </p>
        </div>
       <p>info</p>
    </div>

  </div>
</template>

<script>
export default {
    

}

</script>

<style scoped>
.bijouxcard {
    width: 33%;
    height: 50vh;
    border: 1px solid black;
    border-radius: 3px;
}
.bijouximg{
    background-image: url(../img/testphoto.webp) ;
    height: 70%;
    background-size: cover;
    background-position: center;
}
.top{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top:6px;
}
.price{
    background-color:rgb(117, 117, 211);
    width: 40px;
    height: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 10px;
}
span{
    font-size: 1rem;
    font-weight: 700;
}



</style>