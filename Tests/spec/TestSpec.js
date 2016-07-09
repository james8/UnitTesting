describe("A suite", function() {
	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
	});
});

xdescribe("A disabled spec (xdescribe) gets ignored", function() {
	it("and this will be marked with orange for being skipped", function() {
		expect(true).toBe(false);
	});
});

describe("A spec", function() {
	var foo;

	beforeEach(function() {
		foo = 0;
		foo++;
	});

	afterEach(function() {
		foo = 0;
	});

	it("is just a function, so it can contain code", function() {
		expect(foo).toEqual(1);
	});

	it("can have more than one expectation", function() {
		expect(foo).toEqual(1);
		expect(true).toEqual(true);
	});

	describe("nested inside a second describe", function() {
		var bar;

		beforeEach(function() {
			bar = 1;
		});

		it("can reference both scopes as needed", function() {
			expect(foo).toEqual(bar);
		});
	});
});

describe("Pending specs", function() {
	xit("", function() {
		expect(true).toBe(false);
	});
});