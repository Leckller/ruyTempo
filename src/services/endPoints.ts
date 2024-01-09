import { KEY } from './key';

export const searchAutoComplete = async (local: string) => {
  const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${KEY}&q=${local}`);
  const data = await response.json();
  return data;
};

export const current = async (local: string, days: number) => {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${local}&days=${days}&aqi=no&alerts=no`);
  const data = await response.json();
  return data;
};
