import { Tprops, Tparams, TtemplateReturn } from './types';

import { template } from './template';
import { styles } from './styles';

export type Tcomponent = {
  (params: Tparams): {
    template: (params: Tparams) => TtemplateReturn;
    styles: () => string;
    props: Tprops;
  };
};

export const AppSearch: Tcomponent = ({ props }) => {
  return {
    template,
    styles,
    props,
  };
};
