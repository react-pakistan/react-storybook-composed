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
    reactIcon: {
      title: 'React Icon Collection',
      url: 'https://react-pakistan.github.io/react-icon-collection',
    },
    reactLogo: {
      title: 'React Logo Collection',
      url: 'https://react-pakistan.github.io/react-logo-collection',
    },
    reactEmoji: {
      title: 'React Emoji Collection',
      url: 'https://react-pakistan.github.io/react-emoji-collection',
    },
  },
};
