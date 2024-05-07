import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@yeerlo/nuxt',
    configKey: 'yeerlo'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    if(!nuxt.options.runtimeConfig.public.yeerlo){
      await nuxt.close();
      throw new Error("Please provide Yeerlo's runtime config to continue");
    }

    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin.client'), options);
  }
})
