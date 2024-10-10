import { defineNuxtPlugin } from '#app';
import Yeerlo from '../components/Yeerlo.vue';
let _useUpdatedVersions: boolean;

const loadStyles = (callback: Function) => {
  const head = document.getElementsByTagName('head')[0];
  const link = `https://sdk.yeerlo.com/v1.min.css${_useUpdatedVersions?`?${+new Date()}`:''}`;

  // prevent duplicate injections
  if(head.querySelector(`link[href="${link}"]`)) return callback();

  const style = document.createElement("link");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", link);
  
  // Add style to document head
  head.appendChild(style);
  style.onload = () => {
    callback();
  }
}

const loadScript = (callback: Function) => {
  const head = document.getElementsByTagName('head')[0];
  const link = `https://sdk.yeerlo.com/v1.js${_useUpdatedVersions?`?${+new Date()}`:''}`;

  // prevent duplicate injections
  if(head.querySelector(`script[src="${link}"]`)) return callback();

  const script = document.createElement('script');
  script.defer = true;
  script.src = link;

  // Add script to document head
  head.appendChild(script);
  script.onload = () => {
    callback();
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const options = nuxtApp.$config?.public.yeerlo;
  _useUpdatedVersions = options?.alwaysUseUpToDateVersions;
  delete options?.alwaysUseUpToDateVersions;
  
  const assetstLoaded = new Promise<void>((resolve) => {
    loadStyles(()=> loadScript(() => resolve()));
  });

  nuxtApp.provide('yeerloConfig',options);

  nuxtApp.provide('assetstLoaded',assetstLoaded);

  nuxtApp.vueApp.component('NuxtYeerlo',Yeerlo);
})
