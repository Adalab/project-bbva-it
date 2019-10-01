const getCityId = city => {
  if (city === "Madrid") {
    return "3117735";
  } else if (city === "Barcelona") {
    return "3128760";
  }
};

const getForecastWeather = city => {
  const endpoint = `http://api.openweathermap.org/data/2.5/forecast?id=${getCityId(
    city
  )}&APPID=0c63c7586eaed6d88005102690c6ec7b`;

  return fetch(endpoint)
    .then(response => response.json())
    .then(data => formatData(data));
};

const convertTemp = number => parseInt(number - 273.15);

const getMax = arr => {
  const max = arr.reduce((acc, curr) =>
    curr.main.temp > acc.main.temp ? curr : acc
  ).main.temp;
  return convertTemp(max);
};

const getMin = arr => {
  const min = arr.reduce((acc, curr) =>
    curr.main.temp < acc.main.temp ? curr : acc
  ).main.temp;
  return convertTemp(min);
};

const getIcon = arr => {
  const iconArr = [];

  for (let i = 0; i < arr.length; i++) {
    const icon = arr[i].weather[0].icon;
    let count = 0;

    for (let f = 0; f < arr.length; f++) {
      if (arr[f].weather[0].icon === icon) {
        count += 1;
      }
    }

    let mostRepeated = { icon: icon, repeated: count };

    iconArr.push(mostRepeated);
  }
  const arr2 = iconArr.reduce((acc, curr) =>
    acc.repeated > curr.repeated ? acc : curr
  );
  return arr2.icon
};

const getDay = (date) => {
  let day = date.split(' ')[0].split('-')[2] + '-' + date.split(' ')[0].split('-')[1];
  return day
};

const days = day => {
  return { 
      max: getMax(day), 
      min: getMin(day), 
      icon: getIcon(day),
      day: getDay(day[0].dt_txt) 
  };
};


const selectData = data => {
  return data.list.slice(8, 32);
};

const formatData = data => {
  let arr = selectData(data);
  let day2 = arr.slice(0, 8);
  let day3 = arr.slice(8, 16);
  let day4 = arr.slice(16, 24);
  
  return [days(day2), days(day3), days(day4)];
};

module.exports = {
  getForecastWeather,
  formatData,
  selectData,
  convertTemp,
  getMax,
  getMin,
  getIcon,
  getDay
};
