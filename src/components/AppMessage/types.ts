import { HTMType } from "iares";

export type Ttab = { id: number; title: string ; icon: string };
export type Tprops = { tabs: Ttab[] };
export type Tparams = { props: Tprops };
export type TtemplateReturn =
	| ({ props: Tprops } & HTMType<void, void, Tparams>)
	| HTMType<void, void, Tparams>[];
export type Ttemplate = { (params: Tparams): TtemplateReturn };
