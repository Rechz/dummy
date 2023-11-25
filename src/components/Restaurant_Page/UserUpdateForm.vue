<template>
    <div class="mt-5">
        <h1 class="text-white text-center mb-5">Update Details</h1>
        <div style="height: 120px; width: 120px; margin-bottom: 30px;"><v-img src="@/assets/user.png" /></div>
        <div class="row">
            <!-- <div class="col-1">
                <h5 class="text-white ms-3">Name :</h5>
            </div> -->
            <div class="col-6">
                <h5 class="text-white ms-3">Restaurant name</h5>
                <input type="text"  v-model=" editedUserDetails.name" class="bg-light">
            </div>
            <!-- <div class="col-6">
                <h5 class="text-white ms-3">Restaurant role</h5>
                <input type="text"  v-model=" editedUserDetails.role" class="bg-light">
            </div> -->
            <div class="col-6">
                <label for="dropdown" class="text-white mt-3">Select a role:</label>
                <select v-model="editedUserDetails.role" class="bg-light">
                    <option value="Restaurant" :selected="editedUserDetails.role === 'Restaurant'">Restaurant</option>
                    <option value="Customer" :selected="editedUserDetails.role === 'Customer'">Customer</option>
                    <option value="Admin" :selected="editedUserDetails.role === 'Admin'">Admin</option>
                    <option value="Delivery Person" :selected="editedUserDetails.role === 'Delivery Person'">Delivery Person</option>
                </select>
            </div>
            <div class="col-6">
                <h5 class="text-white ms-3">Restaurant mobile</h5>
                <input type="text"  v-model=" editedUserDetails.mobile" class="bg-light">
            </div>
            <div class="col-6">
                <h5 class="text-white ms-3">Restaurant location</h5>
                <input type="text"  v-model=" editedUserDetails.location" class="bg-light">
            </div>
        </div>
        <button class="btn btn-light mt-5 " @click="storeupdate">Save & Submit</button>
    </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  
  computed: {
    ...mapGetters(['getUserDetails']),
    editedUserDetails: {
      get() {
        return { ...this.getUserDetails };
      },
    },
    userDetails() {
      return this.getUserDetails;
    }
  },

  methods: {
...mapActions(['updateDetails', 'updatestore']),
    update() {
      alert(this.editedUserDetails);
        if (this.editedUserDetails.name && this.editedUserDetails.role && this.editedUserDetails.mobile && this.editedUserDetails.location) {
          this.$store.dispatch('updateDetails', this.editedUserDetails);
          }
    },
    storeupdate() {
      console.log(this.editedUserDetails);
      console.log(this.userDetails);
      this.$store.dispatch('updatestore', this.editedUserDetails);
    }
  }
};
</script>