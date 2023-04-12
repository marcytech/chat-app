```js

import { expect } from "@esm-bundle/chai";

import { AppSample } from "../components/ZZZZZZZZZ";
import { template } from "../components/ZZZZZZZZZ/template";
import { styles } from "../components/ZZZZZZZZZ/styles";

describe("AppSample", () => {
	const props = { name: "favorite", color: "#666" };
	const component = AppSample({ props });
	const template = component.template({ props });

	it("Should have property object", () => {
		expect(component.props).to.be.a("object").and.not.is.a("array");
	});

	it("Should receive the 'name' property", () => {
		expect(component.props).to.have.deep.include({ name: "favorite" });
	});

	it("should receive the 'name' property and return template html composed by property value", () => {
		expect(template).to.have.deep.include({
			type: "span",
			children: ["favorite"],
		});
	});

	it("should receive the 'color' property and return template html composed by property value", () => {
		expect(template).to.is.a("object").and.have.property("props");
		expect(template).property("props").include({ style: "color:#666" });
	});

	it("should'n receive the 'color' property", () => {
		expect(component.template({ props: { name: props.name } }))
			.property("props")
			.include({ style: "" });
	});

	it("should return a css string", () => {
		expect(component.styles()).is.a("string");
	});
});

```