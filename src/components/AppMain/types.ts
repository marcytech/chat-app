import { HTMType } from "iares";

export type Tcomponent = {
	template: { (): HTMType | HTMType[] };
	styles: { (): string };
};

export type TcomponentFactory = {
	(): Tcomponent;
};
