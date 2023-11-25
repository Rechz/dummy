<template>
<v-carousel
:show-arrows="false"
      hide-delimiters
      cycle
      interval="3000"
      height="100vh"
      class="side">
    <v-carousel-item
      src="@/assets/food1.jpg"
      cover
    >
      <div class="d-flex fill-height justify-center align-center">
        <div>
          <h1 class="caption text-center">Sign-up now <br>&<br> Start ordering!!</h1>
        </div>
      </div> 
    </v-carousel-item>
  
  <v-carousel-item
      src="@/assets/food2.jpg"
      cover
    >
      <div class="d-flex fill-height justify-center align-center">
        <div>
          <h1 class="caption text-center">Order in a single click!</h1>
        </div>
      </div> 
  </v-carousel-item>
  
  <v-carousel-item
      src="@/assets/food.jpg"
      cover
    >
      <div class="d-flex fill-height justify-center align-center">
        <div>
          <h1 class="caption text-center">Get discounts <br>upto 50% <br>on all festive seasons!</h1>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.caption {
  color: #efe4a0;
  font-family: 'Lobster', sans-serif;
  letter-spacing: 0.2rem;
  font-size: 70px;
  font-weight: 36px;
  text-shadow: 2px 2px 10px #bf770bae;
}
.side{
  border-radius: 2% 50% 2% 50%; 
  margin-left: 60px;
  margin-right: 20px;
  margin-bottom: 40px;
}
@media screen and (max-width: 870px) {
  .caption {
    font-size: 40px;
  }
}
</style>