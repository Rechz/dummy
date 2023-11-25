import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import store from './store.js';
import router from './router.js';
import 'bootstrap/dist/css/bootstrap.min.css';
loadFonts()

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);
app.use(VueAxios, axios)
router.isReady().then(function() {
    app.mount('#app');
})
