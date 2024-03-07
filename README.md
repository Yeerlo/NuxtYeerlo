<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Yeerlo
- Package name: @yeerlo/nuxt
- Description: Yeerlo's official Nuxt module

PUBLISHING UPDATES TO THIS MODULE
---------------------------------

Publishing updates to an npm package, whether it's under your personal account or an organization, follows a specific process to ensure that the new version is correctly distributed to users. Here’s a step-by-step guide to update your Nuxt module or any npm package:

### Step 1: Make Your Changes

First, implement the changes you want in your package. This could involve fixing bugs, adding features, or improving documentation.

### Step 2: Update the Version Number

Before you publish your update, you need to update the version number in your `package.json` file. npm uses [semantic versioning](https://semver.org/) (semver), which consists of three numbers in the format of `MAJOR.MINOR.PATCH` (e.g., `1.0.0`). Here's how to update your version:

- **Patch release (`1.0.1`)**: Backwards compatible bug fixes.
- **Minor release (`1.1.0`)**: Add functionality in a backwards compatible manner.
- **Major release (`2.0.0`)**: Make incompatible API changes.

You can manually update the version in your `package.json` or use the npm version command to update it automatically:

```bash
npm version patch # for a patch update
npm version minor # for a minor update
npm version major # for a major update
```

This command updates the version number in your `package.json` file and creates a git tag for this release if your project is a git repository.

### Step 3: Publish the Update

After updating the version number, you can publish the update to npm. Make sure you are logged in to npm with the account or organization under which the package is published:

```bash
npm login
```

Then, run the publish command:

```bash
npm publish
```

If your package is scoped under an organization and you're publishing a public update, ensure to include the `--access public` flag if it's not set by default in your `package.json`:

```bash
npm publish --access public
```

### Step 4: Verify the Publication

After publishing, verify that your update is live:

- You can check the npm website for your package's page to see if the new version is listed.
- Alternatively, run `npm view <package-name> versions` to see all the versions of your package, including the one you just published.

### Additional Tips

- **Testing**: Always thoroughly test your package before publishing an update to ensure that it works as expected and is backward compatible (for minor and patch updates).
- **Documentation**: Update your `README.md` and any other relevant documentation to reflect the changes in the new version.
- **Deprecation**: If you're making significant changes that deprecate previous functionality, make sure to communicate these changes clearly in your documentation and change logs.
- **npm deprecate**: For versions that you no longer support or recommend, you can use the `npm deprecate` command to warn users when they install or upgrade to deprecated versions of your package.

Following these steps will help you manage and publish updates to your npm package efficiently, ensuring your users have access to the latest features and fixes.
-->

# Yeerlo

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Integrate the Yeerlo client library in your nuxt project to start displaying events on your web apps.

## Previews

<p align="center">
  <img src="public/preview1.png" alt="Preview 1" width="25%" />
  <img src="public/preview2.png" alt="Preview 2" width="25%" />
  <img src="public/preview3.png" alt="Preview 3" width="25%" />
  <img src="public/preview4.png" alt="Preview 3" width="25%" />
</p>

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Embed your events
- 🚠 &nbsp;Choose your prefered display formats
- 🌲 &nbsp;Lets users attend and book tickets directly in your web apps without any form of redirection
- 👩‍🎨 &nbsp;Responsive & mobile friendly UI
- 🖌️ &nbsp;Customizable color scheme

## Quick Setup

1. Add `@yeerlo/nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @yeerlo/nuxt

# Using yarn
yarn add --dev @yeerlo/nuxt

# Using npm
npm install --save-dev @yeerlo/nuxt
```

2. Add `@yeerlo/nuxt` to the `modules` section of `nuxt.config.ts` and setup the runtimeConfig as shown below:

```js
export default defineNuxtConfig({
  ssr: false, // REQUIRED
  modules: [
    '@yeerlo/nuxt'
  ],
  runtimeConfig:{
    public:{
      yeerlo: {
        creatorId: '2bbegYWBgx...', // your yeerlo id
        layoutMode: "events", // one of "events" | "cinemas" and "meetings" are coming soon
        displayFormat: "default", // one of "default", "simple" | "masonry" and "boxed" are coming soon
        limit: 0 // (Optional) total number of events you want to display.
      },
    }
  },
})
```

That's it! You can now use Yeerlo in your Nuxt app ✨

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@yeerlo/nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://www.npmjs.com/package/@yeerlo/nuxt

[npm-downloads-src]: https://img.shields.io/npm/dt/@yeerlo/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@yeerlo/nuxt

[license-src]: https://img.shields.io/npm/l/@yeerlo/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://www.npmjs.com/package/@yeerlo/nuxt
