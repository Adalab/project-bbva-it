const fakeFetch = require("../mock/mockCurent.json");
const formatData = require("../data/serviceCurrentWeather").formatData;

describe("get current weather data", () => {
  it("current weather data is not an empty object", () => {
    const func = formatData(fakeFetch);
    const result = Object.keys(func).length;
    const expected = true;
    expect(!!result).toBe(expected);
  });
});
