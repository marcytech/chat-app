import { Tparams, TtemplateReturn } from './types.js';
import { Tprops } from './types.js';

import { template } from './template.js';
import { styles } from './styles.js';

export type Tcomponent = {
  (params: Tparams): {
    template: (params: Tparams) => TtemplateReturn;
    styles: () => string;
    props: Tprops;
  };
};

export const AppChatContact: Tcomponent = ({ props }) => {
  return {
    template,
    styles,
    props,
  };
};
