import { atom } from 'recoil';

export const weatherForecastState = atom({
  key: 'weatherForecast',
  default: [],
});