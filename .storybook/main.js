module.exports = {
  stories: [
    '../src/**/*.story.mdx',
    '../src/**/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-google-analytics',
  ],
  refs: {
    reactCommon: {
      title: 'React Commons Collection',
      url: 'https://dev--5f3e23ec5695fb00227498a1.chromatic.com',
    },
    reactUI: {
      title: 'React UI Collection',
      url: 'https://dev--5f3e4432c651170022115563.chromatic.com',
    },
  },
};
