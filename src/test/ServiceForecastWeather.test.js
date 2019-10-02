const fakeForecastFetch = require("../mock/mockForecast.json");

const {formatData, selectData, convertTemp, getMax, getMin, getIcon, getDay} = require("../data/serviceForecastWeather")

describe("get forecast weather data from server", () => {
  it("returns an object", () => {
    const result = formatData(fakeForecastFetch);
    expect(typeof result).toBe("object");
  });
});

describe("select 3 days of forecast weather data from server", () => {
  it("returns an array with 24 objects", () => {
    const result = selectData(fakeForecastFetch).length;
    const expected = 24
    expect(result).toBe(expected);
  });
});

describe("convert temperature kelvin - celsius", () => {
  it("returns 0  when 273.15", () => {
    const result = convertTemp(273.15);
    const expected = 0
    expect(result).toBe(expected);
  });
});

describe("get the max temperature of the day", () => {
  it("returns 26 on the first day", () => {
    const day = fakeForecastFetch.list.slice(8, 16);
    const result = getMax(day);
    const expected = 26
    expect(result).toBe(expected);
  });
});

describe("get the min temperature of the day", () => {
  it("returns 15 on the first day", () => {
    const day = fakeForecastFetch.list.slice(8, 16);
    const result = getMin(day);
    const expected = 15
    expect(result).toBe(expected);
  });
});

describe("get the icon of the day", () => {
  it("returns the 04n icon for the second day", () => {
    const day2 = fakeForecastFetch.list.slice(8, 16);
    const result = getIcon(day2);
    const expected = '04n'
    expect(result).toBe(expected);
  });

  it("returns the 01d icon for the third day", () => {
    const day3 = fakeForecastFetch.list.slice(16, 24);
    const result = getIcon(day3);
    const expected = '01d'
    expect(result).toBe(expected);
  });

  describe("format date", () => {
    it("returns day and month", () => {
      const date = fakeForecastFetch.list[0].dt_txt;
      console.log(date)
      const result = getDay(date);
      const expected = '01-10';
      expect(result).toBe(expected);
    });
  });
});