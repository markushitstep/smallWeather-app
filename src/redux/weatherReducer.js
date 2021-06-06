
import { weatherAPI } from "../api/api";

const GET_WEATHER = 'GET_WEATHER';
const SHOW_ERROR_API = 'SHOW_ERROR_API';

let initialState = {
    theWeather: null,
    errorAPI: null
};

const weatherReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                theWeather: action.theWeather
            }
        case SHOW_ERROR_API:
            return {
                ...state,
                errorAPI: action.errorAPI
            }
        default:
            return state;
    }
}

export const setWeather = (theWeather) => ({ type: GET_WEATHER, theWeather })
export const setErrorApi = (errorAPI) => ({ type: SHOW_ERROR_API, errorAPI });

export const getTheWeather = (theWeather) => (dispatch) => {
    weatherAPI.getWeather(theWeather).then(response => {
        if (response.data.cod === 200) {
            let weather = response.data;
            dispatch(setWeather(weather));
            dispatch(setErrorApi(null));
        }
        

    }).catch(e => { dispatch(setErrorApi('city not found'))});
}

export default weatherReducer;