const path = require('path')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
          '@': path.resolve(__dirname, '../storybook'),
        },
      },
    }
  },
  "framework": "@storybook/react"
}