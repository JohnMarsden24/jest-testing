const myController = require("./myController");
const utilities = require("./utilities");

jest.mock("./utilities");

describe("doubleNum", () => {
  test("should call sayMyName", () => {
    myController.doubleMyNum(2, "test name");
    expect(utilities.sayMyName).toHaveBeenCalledWith("test name");
  });

  test("should double my number", () => {
    const { doubleNum } = jest.requireActual("./utilities");
    expect(myController.doubleMyNum(2, "test name")).toBe(4);
  });
});
