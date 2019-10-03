const fakeForecastFetch = require("../mock/mockForecast.json");

const {formatData, selectData, convertTemp, getMax, getMin, getIcon, getWeekDay, getDay2} = require("../data/serviceForecastWeather")

describe("get forecast weather data from server", () => {
  it("returns an object", () => {
    const result = formatData(fakeForecastFetch);
    expect(typeof result).toBe("object");
  });
});



describe("select 3 days of forecast weather data from server", () => {
  it("get hour from complete date xx:xx:xx",()=>{
    const date= "2019/10/03 12:00:00";
    const result=getDay2(date);
    const expected= "12:00:00"
    expect(result).toBe(expected);
  })
  it("returns an array with 24 objects", () => {
    const result = selectData(fakeForecastFetch)[0].dt_txt;
    const expected = "2019-10-02 00:00:00"
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

describe("get the description of the day", () => {
  it("returns the broken clouds description for the second day", () => {
    const day2 = fakeForecastFetch.list.slice(8, 16);
    const result = getIcon(day2);
    const expected = '04'
    expect(result).toBe(expected);
  });

  it("returns the clear sky description for the third day", () => {
    const day3 = fakeForecastFetch.list.slice(16, 24);
    const result = getIcon(day3);
    const expected = '01'
    expect(result).toBe(expected);
  });

  describe("format date", () => {
    it("returns day of week", () => {
      const date = fakeForecastFetch.list[0].dt_txt;
      const result = getWeekDay(date);
      const expected = 'Martes';
      expect(result).toBe(expected);
    });
  });
});