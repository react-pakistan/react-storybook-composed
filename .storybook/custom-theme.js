import { create } from '@storybook/theming';
import { reactPakistanTheme } from '@react-pakistan/util-functions';

export default create({
  ...reactPakistanTheme,

  brandImage: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg',
  brandTitle: 'React Storybook',
  brandUrl: 'https://github.com/react-pakistan/react-storybook',
});
