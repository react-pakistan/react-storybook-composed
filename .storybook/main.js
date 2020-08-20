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
      url: 'https://taimoormk.github.io/react-commons-collection',
    },
    reactUI: {
      title: 'React UI Collection',
      url: 'https://taimoormk.github.io/react-ui-collection',
    },
  },
};
