import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
});

it("mock funciton", () => {
  const myMock = jest.fn(x => 2 + x);
  console.log(myMock(100));
  // > 102

  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce("x")
    .mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
});

it("test instance", () => {
  const myMock = jest.fn();

  const a = new myMock();
  a.karla = "mia";

  const testObject = { sergio: "cool" };
  const testBouns = myMock.bind(testObject);
  testBouns();

  const b = { test: "test" };
  const bound = myMock.bind(b);
  bound();

  // console.log("bound", bound);
  console.log(myMock.mock.instances);
  // > [ <a>, <b> ]
});

it("test how are they call or what return", () => {
  const someMockFunction = jest.fn((x, y) => "return value");

  const otherMockFUntion = jest.fn();
  const a = new otherMockFUntion();
  a.name = "test";
  const b = new otherMockFUntion();

  someMockFunction("first arg", "second arg");

  // The function was called exactly once
  expect(someMockFunction.mock.calls.length).toBe(1);

  // The first arg of the first call to the function was 'first arg'
  expect(someMockFunction.mock.calls[0][0]).toBe("first arg");

  // The second arg of the first call to the function was 'second arg'
  expect(someMockFunction.mock.calls[0][1]).toBe("second arg");

  // The return value of the first call to the function was 'return value'
  expect(someMockFunction.mock.results[0].value).toBe("return value");

  // This function was instantiated exactly twice
  expect(otherMockFUntion.mock.instances.length).toBe(2);

  // The object returned by the first instantiation of this function
  // had a `name` property whose value was set to 'test'
  expect(otherMockFUntion.mock.instances[0].name).toEqual("test");
});
