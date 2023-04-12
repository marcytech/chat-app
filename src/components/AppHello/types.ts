import { HTMType } from "iares";

export type Tprops = {
	icon: string;
	value: string;
	size: number;
	height: number;
};
export type Tparams = { props: Tprops };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };
