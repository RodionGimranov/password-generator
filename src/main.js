import { createApp } from "vue";

import App from "./App.vue";
import Vue3Lottie from "vue3-lottie";
import i18n from "./libs/vue-i18n/i18n.js";

createApp(App).use(Vue3Lottie).use(i18n).mount("#app");
