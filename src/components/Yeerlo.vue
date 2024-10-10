<template>
    <div id="yeerloContainer"></div>
</template>

<script setup>
    import { useNuxtApp } from '#app';
    const nuxtApp = useNuxtApp();

    nuxtApp.$assetstLoaded.then(()=>{
        new window.Yeerlo(nuxtApp.$yeerloConfig).init();
    });
</script>