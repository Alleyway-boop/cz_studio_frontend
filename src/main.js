import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/tailwindcss.css"
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import UndrawUi from 'undraw-ui'
import Region from 'v-region'
import 'undraw-ui/dist/style.css'
import axios from 'axios'
axios.defaults.headers.post['Content-Type']='application/json'
const app = createApp(App);
app.config.globalProperties.$axios=axios
app.use(store)
    .use(router)
    .use(ElementPlus)
    .use(UndrawUi)
    .use(Region)
    .mount('#app')
