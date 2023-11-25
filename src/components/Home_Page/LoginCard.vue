<template>
  <div class="ps-5 ms-5">
    <v-card
      class="mx-auto mt-3 px-4 text-center py-0 card-with-background"
      width="350"
      height ="640"
      title="Login"
    >
    
        <v-text-field
          v-model="mobile"
          color="teritiary"
          placeholder="Mobile Number"
          prepend-inner-icon="mdi-cellphone"
          variant="underlined"
          class="mt-5 pt-5"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          color="teritiary"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock"
          variant="underlined"
          class="pb-4"
          ></v-text-field>
  
          <router-link to='/restaurant' class="router">
            <v-btn
              block
              height="50"
              color ="#1a1a1a"
              class="bg-gradient"
            >Login</v-btn>
          </router-link>
          <!-- <v-btn
              block
              height="50"
              color ="#1a1a1a"
              class="bg-gradient"
              @click="loginValidate"
            >Login</v-btn> -->


          <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
          <v-divider style="padding-top: 190px;"></v-divider>
      <p class="text-right">New user? <router-link to="/register" class="router"><b>REGISTER</b></router-link></p>
    
    </v-card>
  </div>
  </template>
  
  
  <script>
  //  import axios from 'axios';
   import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        mobile:'',
        password: '',
        errorMessage: '',
        // userDestails: [],
      }
    },
    methods: {
      // async loginValidate() {
      //   try{
      //     const response = await axios.post('http://192.168.66.232:8080/RegLogin/Login', {
      //       "phoneNo": this.mobile,
      //       "password": this.password,
      //     });
      //     if (response.status === 200) {
      //       alert('Login successful')
      //       console.log(response.data)
      //       this.userDetails = response.data;
      //       console.log('data', this.userDetails)
      //       this.$router.push(response.data.redirectUrl)
      //     }
      //   }
      //   catch (error) {
      //     this.errorMessage = error.message;
      //   }
      // },

      async loginValidate() {
      try {
        const userDetails = await this.$store.dispatch('fetchUserDetails', {
          mobile: this.mobile,
          password: this.password,
        });
        alert('Login successful');
        console.log('userDetails', userDetails);
        this.$router.push(userDetails.redirectUrl);
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    },
    computed: {
    ...mapGetters(['getUserDetails']),
    userDetails() {
      return this.getUserDetails;
    },
  },
  };
  </script>

<style scoped>
.router, p {
  text-decoration: none; 
  color:#533e0d;
}
.card-with-background {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  color:#935b08;
  background-image: url('@/assets/login.jpg');
} 
</style>