<template>
    <header>
        <div class="d-flex pt-1 px-4 align-items-center justify-content-between navbar">
         <div class="mt-3">
           <p class="fs-4" style=" color: #6b4306;">
             <v-icon
              icon="mdi-food"
              size="x-large"></v-icon> <b>Food Delivery App</b></p>
         </div>
         <div class="name mt-3">
           <p class="fs-4" style="color: #6b4306;">
             <router-link to='/updatedetails'><v-icon
              icon="mdi-account-circle"
              class="me-2"
              size="small"
              color = "#6b4306">
             </v-icon></router-link><b>{{ userDetails ? userDetails.name : 'Loading...' }}</b></p>
           <p style="color: #6b4306;" class="text-right">Date: {{currentDate}}, Time: {{formattedTime}}</p>
           <p style="color: #6b4306;" class="text-right">Date: {{userDetails.role}}, Time: {{userDetails.mobile}}</p>
          </div>
        </div>
    </header>

    <div class="row" >
    <nav class="col-2">
      <SideNavBar/>
    </nav>
    <div class="col-10" style="margin-top: 70px;">
      <router-view></router-view>
    </div> 

</div>
</template>

<script> 
import  SideNavBar from './SideNavBar.vue';
import { mapGetters } from 'vuex';

export default{
  computed: {
    ...mapGetters(['getUserDetails']),
    userDetails() {
      return this.getUserDetails;
    },
  },
  components: {
        SideNavBar, 
    }, 
  data() {
    return {
      currentDate: null,
      formattedTime: null,
    };
  },

  mounted() {
    this.getCurrentDateTime();
    this.intervalId = setInterval(() => {
      this.getCurrentDateTime();
    }, 1000);
    console.log(this.userDetails)
  },

  methods: {
    getCurrentDateTime() {
      const today = new Date();
      const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
      this.currentDate = today.toLocaleDateString('en-GB', dateOptions);
      const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      this.formattedTime = today.toLocaleTimeString('en-US', timeOptions);
    },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&display=swap');
.navbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
  font-family: 'PT Serif', serif;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.693);
  background-image: url('@/assets/navbar.jpg');
  background-size: cover;
}
.name{
  line-height: 10px;
}
</style>