jest.mock("./foo"); // this happens automatically with automocking
const foo = require("./foo");

it("test mockimplementation", () => {
  foo.mockImplementation(() => 42);
  foo();
  // > 42
  expect(foo()).toBe(42);
});

it("name for mock function", () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockImplementation(scalar => 42 + scalar)
    .mockName("updateFUNc");

  const a = new myMockFn();

  // expect(myMockFn).toHaveBeenCalled(1);
  // The function was called exactly once
  expect(myMockFn.mock.calls.length).toBe(1);
});

it("testing mock function name", () => {
  const mockFunction = jest.fn().mockName("Mock Function");
  expect(mockFunction.getMockName()).toBe("Mock Function");
});

it("mock instances", () => {
  const mockFn = jest.fn();

  const a = new mockFn();
  const b = new mockFn();
  b.sergio = "sergio";

  mockFn.mock.instances[0] === a; // true
  mockFn.mock.instances[1] === b; // true
  expect(b).toEqual({ sergio: "sergio" });
});

it("test new instance from page", () => {
  foo.mockImplementation(() => 100);
  foo();

  expect(foo()).toEqual(100);
});

fit("test symbol", () => {
  let sym = Symbol("foo");
  console.log(sym);
});
