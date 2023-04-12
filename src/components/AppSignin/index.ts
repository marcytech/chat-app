import { Tparams, TtemplateReturn } from "./types.js";
import { Tprops } from "./types";

import { template } from "./template";
import { styles } from "./styles";

export type Tcomponent = {
	(params: Tparams): {
		template: (params: Tparams) => TtemplateReturn;
		styles: () => string;
		props: Tprops;
	};
};

export const AppSignin: Tcomponent = ({ props }) => {
	return {
		template,
		styles,
		props,
	};
};
