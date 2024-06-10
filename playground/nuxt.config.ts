export default defineNuxtConfig({
  modules: ['../src/module'],
  runtimeConfig:{
    public:{
      yeerlo: {
        // 5 EVENT DISPLAY MODES (only enable one of the modes below)

        creatorId: '2bbegYWBgxCUih8p26L17V3IM7W', // display events of a particular creator
        // creatorIds: ['2bbegYWBgxCUih8p26L17V3IM7W'], // display events of specific creators
        // random: true, // display random events from any creator (the default mode when none of the other modes are set)
        // categorySlug: 'charity-and-aid', // display events in a particular category
        // countryName: 'Ghana', // "US", "UK", "Canada" etc. display events in a particular country

        // END 5 EVENT DISPLAY MODES

        layoutMode: "events", // one of "events" | "cinemas" and "meetings" are coming soon
        displayFormat: "default", // one of "default", "simple" | "masonry" and "boxed" are coming soon
        limit: 0, // (Optional) total number of events you want to show.
        alwaysUseUpToDateVersions: true // optional
      },
    }
  },
  devtools: { enabled: true }
})
