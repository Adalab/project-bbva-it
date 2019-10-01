const fakeFetch = require("../mock/mock.json");
const formatData = require("../data/serviceCurrentWeather").formatData;

describe("get current weather data", () => {
  it("current weather data is not an empty object", () => {
    const func = formatData(fakeFetch);
    const result = Object.keys(func).length;
    console.log(func);
    const expected = true;
    expect(!!result).toBe(expected);
  });
});
