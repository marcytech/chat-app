import globalJsdom from "global-jsdom";
import * as sinon from "sinon";
import { expect, assert } from "@esm-bundle/chai";
import { createState, html, render } from "iares";

import { AppHello } from "@/components/AppHello";

describe("AppHello component", () => {

	let cleanup: { (): void };

	before(() => {
		cleanup = globalJsdom();
	});

	after(() => {
		cleanup();
	});

	beforeEach(async () => {

	});

	afterEach(async () => {

	});

	it("First helloApp test", () => {
		expect(1).to.be.equal(1)
	});
});
