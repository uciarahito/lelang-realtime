// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import firebase from 'firebase'
import VueFire from 'vuefire'

const config = {
  apiKey: "AIzaSyCy178Plzi4vyrUiYVMm3xhQlkgLkRwOv4",
  authDomain: "lelang-d0faf.firebaseapp.com",
  databaseURL: "https://lelang-d0faf.firebaseio.com",
  projectId: "lelang-d0faf",
  storageBucket: "lelang-d0faf.appspot.com",
  messagingSenderId: "781845431534"
};
const firebaseApp = firebase.initializeApp(config);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/id'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.prototype.$db = firebaseApp.database()
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
