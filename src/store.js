import {createStore} from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        userDetails: {name:'Reshma', location:'Alappuzha', mobile:9539894490, role:'Restaurant'},
      },
      mutations: {
        setUserDetails(state, userDetails) {
          state.userDetails = userDetails;
        },
        updateUserDetails(state, payload) {
          // Update the state with the new user details
          state.userDetails = { ...payload };
        },
      },
      actions: {
        async fetchUserDetails({ commit }, { mobile, password }) {
          try {
            const response = await axios.post('http://192.168.66.232:8080/RegLogin/Login', {
              "phoneNo": mobile,
              "password": password,
            });
            if (response.status === 200) {
              commit('setUserDetails', response.data);
              return response.data;
            }
          } catch (error) {
            console.error('Error fetching user details', error);
            throw error;
          }
        },

        async updateDetails({commit}, editedUserDetails) {
          try {
              const response = await axios.put('http://192.168.66.232:8080/RegLogin/Registration', editedUserDetails);
              if (response.status === 201) {
                commit('updateUserDetails', response.data);
                alert('Update successfull');
                return response.data;
            }
          } catch (error) {
            console.error('Error fetching user details', error);
            alert(error);
            throw error;
          }
        },
updatestore({commit}, payload) {
commit('updateUserDetails', payload);
}
      },
      getters: {
        getUserDetails: (state) => state.userDetails,
      },
});

export default store;

