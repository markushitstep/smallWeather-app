import axios from "axios" 

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
});
const myApi = 'd38c4e6eff5a8e9bdc4e682e6c7fcef2';

export const weatherAPI = {
    getWeather(cityName) {
        return instance.get(`weather?q=${cityName}&appid=` + myApi);
    }
}