<template>
  <div class="ps-5 ms-5">
    <v-card
        class="mx-auto text-center card-with-background"
        width="350"
        title="User Registration"     
    >
      <v-container>
        <v-form @submit.prevent="submitForm" ref="form" validate-on="input">
          <!-- Type of user -->
        <v-select
          placeholder="-- Select a user --"
          v-model="userType"
          :items="['ADMIN','CUSTOMER', 'RESTAURANT','DELIVERY BOY']"
          prepend-inner-icon="mdi-account-box-multiple"
          variant="underlined"
          :rules="typeRules"
          @input="setDetailsEntered"
          ></v-select>
          <!-- User Name -->
        <v-text-field
          v-model="user"
          color="teritiary"
          placeholder="User name"
          prepend-inner-icon="mdi-account"
          variant="underlined"
          :rules="userRules"
          class="user"
          @input="setDetailsEntered"
          >
        </v-text-field>
        <!-- Location -->
        <v-text-field
            v-model="location"
            color="teritiary"
            placeholder="Location"
            prepend-inner-icon="mdi-map-marker"
            variant="underlined"
            :rules="locationRules"
            @input="setDetailsEntered"
          ></v-text-field>
          <!-- Mobile number -->
        <v-text-field
            v-model="mobile"
            color="teritiary"
            placeholder="Mobile Number"
            prepend-inner-icon="mdi-cellphone"
            variant="underlined"
            :rules="mobRules"
            @input="setDetailsEntered"
          ></v-text-field>
          <!--Password-->
        <v-text-field
            v-model="password"
            color="teritiary"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock"
            variant="underlined"
            :rules="passwordRules"
            @input="setDetailsEntered"
          ></v-text-field>
          <!-- Terms & Conditions -->
        <v-checkbox
            v-model="terms"
            label="I agree to site terms and conditions"
            :rules="[v => !!v || 'You must agree to continue!']"
            @click="setDetailsEntered"
          ></v-checkbox>
          <!-- <p class="error-message" v-if="showErrorMessage">{{ errorMessage }}</p> -->
          <!-- Register button -->
        <v-btn
            block
            height="50"
            class="bg-gradient"
            color ="#1a1a1a"
            type="submit"
          >Register</v-btn>
        </v-form>
      </v-container>
      <v-divider></v-divider>
      <!-- Route link to login component -->
       <p class="text-right me-3">Already a user? <router-link to="/login" class="login"><b>LOGIN</b></router-link>
       </p>
      </v-card>
    </div>
    
    <modal-dialog v-if="inputValid" :title=headerMessage @close="submitMessage">
    <template #default>
        <p>{{dialogMessage}}</p>
    </template>
    <template #actions>
        <button class="btn-class" @click="submitMessage">Okay</button>
    </template>
    </modal-dialog>
</template>

<script> 
import ModalDialog from '../ModalDialog.vue'
import axios from 'axios';
export default {
  components: {
    ModalDialog
  },
  data() {
    return{
      user:'',
      mobile: null,
      password: '',
      terms: false,
      userType: null,
      location: '',
      detailsEntered: false,
      dialogMessage: '',
      inputValid: false,
      submitClicked: true,
      headerMessage: '',
      
      userRules: [
        value => {
          if (value?.length > 2) return true
          return 'User name must be at least 3 characters.'
        }],

      locationRules: [
        value => {
          if (value) return true;
          return 'Location is required.'
        }],

      mobRules: [
        value => {
          if (value) return true;
          return 'Mobile is required.';
        },
        value => {
          if (/^\d+$/.test(value)) return true;
          return 'Only digits allowed.';
        },
        value => {
          if (value?.length === 10 ) return true;
          return 'Enter a valid number.';
        }],

      passwordRules: [
        value => {
          if (value) return true;
          return 'Password is required.';
          },
        value => {
            if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$^&*._-])/.test(value)) return true;
            return 'Password must contain atleast one uppercase, one lowercase, one digit & one special symbol.';
          },
        value => {
          if (value?.length >=6 ) return true;
          return 'Password must have atleast 6 characters.';
          }],

      typeRules: [
        value => !!value || 'User type is required.'
      ]
    };
  },
 
  methods: {
    setDetailsEntered() {
      this.detailsEntered = true;
    },

    submitMessage()
        {
          this.inputValid=false;
        },

    clearData() {
      this.user = '';
      this.mobile = null;
      this.password = '';
      this.terms = false;
      this.userType = null;
      this.location = '';
      this.detailsEntered = false;
      this.dialogMessage = '';
      this.inputValid = false;
      this.headerMessage = '';
    },

    async submitForm() {
      this.submitClicked = false;
      try {
        if (this.userType && this.user && this.mobile && this.password && this.terms) {
        const isFormValid = await this.$refs.form.validate();
        if (isFormValid) {
          console.log('success')
          const response = await axios.post('http://192.168.66.232:8080/RegLogin/Registration', {
              "usertypeString": this.userType,
              "name": this.user,
              "phoneNo": this.mobile,
              "password": this.password,
              "terms": this.terms,
              "location": this.location
          });
          if (response.status === 201) {
            this.inputValid = true;
            this.headerMessage = "Registration Successfull";
            this.dialogMessage = response.data + ' Login to continue.';
            this.$router.push('/login');
            this.submitClicked =true;
            // this.$refs.form.reset();
          }
          else {
            console.error('Request failed with status:', response.status);
          }
        }}
      } 
      catch (error) {
      console.error('Error making request:', error);
      this.inputValid = true;
      this.headerMessage = "Error"
      this.dialogMessage = error.message || 'An error occurred while making the request';
      this.submitClicked =true;
      }
    }
 },
 beforeRouteLeave(_, _2, next) {
    console.log('leaving route')
    if (this.detailsEntered && this.submitClicked) {
      const confirmMessage = "You have unsaved changes. Are you sure you want to leave?";
      if (window.confirm(confirmMessage)) {
        next();
      } 
      else {
        next(false);
      }
    } else {
      next();
    }
   }
};
</script>

<style scoped>
a,p, .login {
  text-decoration: none; 
  color:#533e0d;
}
.card-with-background {
  background-image: url('@/assets/login.jpg');
  color: #533e0d;
} 
.btn-class {
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #ffe55f;
    background-color: #393004;
    color: #f3ebde;
    font-weight: 600;
    cursor: pointer;
    border-radius: 20px;
   float: right;
   margin-bottom: 20px;
  }

</style>