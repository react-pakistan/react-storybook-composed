module.exports = {
  stories: [
    '../src/**/*.story.mdx',
    '../src/**/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-google-analytics',
    '@storybook/addon-links',
  ],
  refs: {
    reactCommon: {
      title: 'React Commons Collection',
      url: 'https://react-commons-collection.surge.sh',
    },
    reactUI: {
      title: 'React UI Collection',
      url: 'https://react-ui-collection.surge.sh',
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
