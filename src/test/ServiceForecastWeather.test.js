const formatData = require("../data/serviceForecastWeather").formatData;
const fakeFetch = require("../mock/mock.json");

describe("get forecast weather data from server", () => {
  it("returns an object", () => {
    const result = formatData(fakeFetch);
    expect(typeof result).toBe("object");
  });
});
