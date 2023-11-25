<template>
    <div class="panoramic-image-view">
        <v-img
          src="@/assets/main-img.jpg"
          alt="Order image"
          class="panoramic-image"
        />
        <div class="content-container">
          <h1>Are you Hungry???</h1>
          <h4>Within a few clicks, find meals that are accessible near you!</h4>
          <div class="d-flex justify-content-center">
            <a href="#sign" class="navs  btn button-class">Login/Register</a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.panoramic-image-view {
    position: relative;
    width: 100%;
    height: 100%; 
    background-repeat: no-repeat;
    background-size: cover;
  }
.panoramic-image {
    width: 100%;
    height: 100%;
  }
.content-container {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%,-40%);
    text-align: center;
    width: 70%;
    color: #d16e05;
   
  }
.content-container h1{
    text-shadow: 2px 2px 4px rgba(182, 165, 165, 0.238);
    font-weight: 700;
    font-size: 45px;
  }
.content-container h4{
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
    color: #EFA145;
  }
input[type="search"]:hover {
    transform: scale(1.1); /* Zoom effect on hover */
}
input[type="search"]:focus {
    outline: none;
    border-color: #fff; /* Set the border color to the default color when focused */
    transform: scale(1.1);
}
input[type="search"]{
  height: 31px;
}
.navs {
  text-decoration: none;
}
.button-class {
  /* background-color:#bf770b !important; */
  border: none !important;
  color: #d16e05;
}
/* .button-class:hover {
  border-radius: 0 !important;
  background-color:#272625a1 !important;
  box-shadow: 5px 10px 18px #a28c5d8c !important;
} */

@media screen and (max-width: 870px)
{
  .content-container {
    top: 40%;
    width: 80%;
  }  
  .content-container h1{
    font-size: 20px;
  }
  .content-container h4{
    font-size: 10px;
  }
  .button-class{
    height: 20px;
    width: 100px;
  }
  .navs{
    font-size: 8px;
  }
}
</style>