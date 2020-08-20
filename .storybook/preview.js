import { themes } from '@storybook/theming';
import { parameters as parameter, globalTypes as globalType } from '@taimoormk/util-functions';

export const parameters = {
  ...parameter,
  docs: {
    theme: themes.dark,
  },
};

export const globalTypes = {
  ...globalType,
};
