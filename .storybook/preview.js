import { parameters as parameter, globalTypes as globalType } from '@react-pakistan/util-functions';
import { themes } from '@storybook/theming';

export const parameters = {
  ...parameter,
  docs: {
    theme: themes.dark,
  },
};

export const globalTypes = {
  ...globalType,
};
