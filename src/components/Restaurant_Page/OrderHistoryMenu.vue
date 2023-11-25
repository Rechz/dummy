<template>
    <div class="grid-container ms-5 ps-4">
        <router-link to="/todayorders" class="ps-5">
            <div class="grid-items">
                <h2 class="mt-4 pt-1">Current Orders</h2>
            </div>
        </router-link> 
        <router-link to="/todayorders" class="pe-4">
            <div class="grid-items alt">
                <h2 class="mt-4 pt-1">Pending Orders</h2>
            </div>
        </router-link>
        <router-link to="/todayorders" class="ps-5">
            <div class="grid-items alt">
                <h2 class="mt-4 pt-1">Out for Delivery</h2>
            </div>
        </router-link>
        <router-link to="/todayorders" class="pe-4">
            <div class="grid-items">
                <h2 class="mt-4 pt-1">Completed Orders</h2>
            </div>
        </router-link>
    </div>
</template>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=EB+Garamond&family=PT+Serif:ital@1&display=swap');

.grid-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
    margin-top: 200px;
}
.grid-items{
    width: 500px;
    height: 100px;
    border-radius: 50px 0 50px 0;
    text-align: center;
    border:1px solid #ffe45f;
    background-color: none;
    box-shadow: 0px 0px 8px rgba(212, 154, 39, 0.558);
    color: white; 
    /* color:#935209; */
    /* font-family: 'EB Garamond', serif; */
    font-family: 'DM Sans', sans-serif;
}
.grid-items.alt{
    border-radius: 0 50px 0 50px;
}
.grid-items:hover{
    /* background-color:  #bf770b; */
    background-image: url('@/assets/navbar.jpg');
    background-size: cover;
    background-position: center;
    /* background: linear-gradient(to bottom,#7c4f0b,#a46307 ); */
    /* background: linear-gradient(to bottom, #1d1c1b, #2d251d); */
    color: #6b4306;
    
    border-radius: 0 50px 0 50px;
    transition: all 0.5s ease;
}
.grid-items:hover.alt{
    border-radius: 50px 0 50px 0;
}
a{
    /* color: white;  */
    text-decoration: none;
}
/* a:hover{
    color: #6b4306;
    color:#935209; 
} */
</style>