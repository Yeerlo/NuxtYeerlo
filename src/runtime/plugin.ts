import { defineNuxtPlugin } from '#app'
import Yeerlo from '../components/Yeerlo.vue'

const loadStyles = (callback: Function) => {
  const head = document.getElementsByTagName('head')[0];
  const link = "https://sdk.yeerlo.com/v1.min.css";

  // prevent duplicate injections
  if(head.querySelector(`link[href="${link}"]`)) return callback();

  const style = document.createElement("link");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", "https://sdk.yeerlo.com/v1.min.css");
  
  // Add style to document head
  head.appendChild(style);
  style.onload = () => {
    callback()
  }
}

const loadScript = (callback: Function) => {
  const head = document.getElementsByTagName('head')[0];
  const link = "https://sdk.yeerlo.com/v1.js";

  // prevent duplicate injections
  if(head.querySelector(`script[src="${link}"]`)) return callback();

  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://sdk.yeerlo.com/v1.js'

  // Add script to document head
  head.appendChild(script)
  script.onload = () => {
    callback()
  }
}

const assetstLoaded = new Promise<void>((resolve) => {
  loadStyles(()=> loadScript(() => resolve()));
});

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig().public.yeerlo;
  nuxtApp.provide('yeerloConfig',options);

  nuxtApp.provide('assetstLoaded',assetstLoaded);

  nuxtApp.vueApp.component('NuxtYeerlo',Yeerlo);
})
