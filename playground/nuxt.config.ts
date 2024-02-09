export default defineNuxtConfig({
  modules: ['../src/module'],
  ssr: false,
  runtimeConfig:{
    public:{
      yeerlo: {
        creatorId:'2bbegYWBgxCUih8p26L17V3IM7W',
        layoutMode: "events", // one of "events" | "cinemas" and "meetings" are coming soon
        displayFormat: "default", // one of "default", "simple" | "masonry" and "boxed" are coming soon
        limit: 0 // (Optional) total number of events you want to show.
      },
    }
  },
  devtools: { enabled: true }
})
