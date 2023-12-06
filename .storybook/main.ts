module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  babel: async (options) => ({
    ...options,
    plugins: [
      [
        'styled-components',
        {
          displayName: false,
          ssr: true,
          fileName: false
        }
      ]
    ]
  }),

  docs: {
    autodocs: true
  }
}