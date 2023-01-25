import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// fontaswom
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// bootstrap and js
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//main css file
import "./style.css";

createApp(App).use(store).use(router).mount('#app')
