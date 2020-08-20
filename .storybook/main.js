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
      url: 'https://taimoormk.github.io/react-ui-collection',
    },
    reactIcon: {
      title: 'React Icon Collection',
      url: 'https://taimoormk.github.io/react-icon-collection',
    },
    reactLogo: {
      title: 'React Logo Collection',
      url: 'https://taimoormk.github.io/react-logo-collection',
    },
  },
};
