import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import router from './router'
// import store from './store'

const app = createApp(App);

// app.use(store);
// app.use(VueAxios, axios)
app.use(VueSmoothScroll)
app.use(router);
app.mount("#app");