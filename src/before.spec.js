beforeEach(() => console.log("dislpay this beforeEach"));
afterEach(() => console.log("dislpay this afterEach"));

const x = 20;

it("test before test 1", () => {
  const mockFunc = jest.fn(x => console.log(x + 2));
  mockFunc(x);
});

it("test before test 2", () => {
  const mockFunc = jest.fn(x => x + 100);
  const instance = new mockFunc();

  mockFunc.mockImplementation();

  expect(mockFunc.mock.instances.length).toBe(1);
  mockFunc(10);
  expect(mockFunc.mock.results[0].value).toBe(100);
});

it("test before test 3", () => {
  const mockFunc = jest.fn(x => console.log(x + 2));
  mockFunc(x);
});

it("test object", () => {
  const object = {
    name: "sergio",
    apellido: "hernandez",
    ciudad: "milton keynes",
    trabajo: "LSM",
    wife: "Karla"
  };

  const { name, apellido, ...offerOnlyData } = object;

  console.log(offerOnlyData);
});
