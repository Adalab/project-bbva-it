const getCurrentWeather = require("../data/Service");

describe("get current Weather data", () => {
  it("returns an object", () => {
    const result = getCurrentWeather("../mock/mock.json", "Madrid");
    expect(typeof result).toBe("object");
  });
});
