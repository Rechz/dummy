<template>
    <div class="d-flex flex-column text-left text-white side-nav">
      <hr class="my-5">
        <ul class="menu ps-0">
          <li class="fs-5"><router-link to="ordermenu">Your Orders</router-link></li>
          <li class="fs-5"><a href=#>Order History</a></li>
          <li class="fs-5"><router-link to="/menu">Menu <v-icon icon="mdi-menu-down" size="small"></v-icon></router-link>
            <ul class="submenu">
              <li><a href=#>Add Items</a></li>
              <li><a href=#>Update/Delete Items</a></li>
            </ul>
          </li>
        </ul>
        <hr>
        <div class="text-center pb-4">
          <button class="log-btn" @click="returnHome">
            <v-icon
             icon="mdi-logout"
             class="me-2"
             size="small">
            </v-icon>
            Logout
          </button>
        </div>
      </div>
</template>

<script>
export default{
  methods: {
    returnHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.side-nav{
  display: block;
  position: relative;
  height: calc(100vh - 70px);
  position: fixed; 
  margin-top: 70px;
  width: 230px;
}
.side-nav::after {
  content: "";
  background: url('@/assets/nav.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}
.menu{
  height: 70vh;
  list-style: none;
  overflow-y: auto; /* Enable scrolling for menu */
}
.menu>li, .menu a, div a{
  padding: 15px;
  color: white;
  text-decoration: none;
    
}
.menu>li:last-child{
  position:relative;
}
.submenu{
  position:absolute;
  display:none;
  top: 63px;
  left:20px;
  list-style: none;
  text-align: left;
    /* background-color:#ffdc5fa0; */
  padding: 10px;
  width: 190px;
  font-size: 16px;
  background-color:#efc428a0;   
}
.submenu li{
  border-bottom:1px dotted #5c3903;
  padding-bottom: 5px;   
}
.submenu>li a{
  padding-left: 0;
}
.submenu li:last-child {
  border: none;
}
div>a:hover, .log-btn:hover{
  color:#ffd664;
  font-size: 18px;
  font-weight: 700;
}
.menu>li:hover .submenu {
  display: block;
}
.submenu>li a:hover{
  color:#5c3903;
  text-align: left;
  padding-left: 0;
}
.menu>li:hover{
  background-color:#efc428a0; 
}
.menu>li>a:hover, .menu>li>a:active{
  color:#6b4306;
  font-size: 22px;
  font-weight: 500;
}
.menu>li>.router-link-active {
  color:#efc428a0;
  font-weight: 700;
}
.submenu:hover{
  top: 60px;
}
</style>