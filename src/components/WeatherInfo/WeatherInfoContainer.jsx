import React from 'react';
import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';
import { getTheWeather } from '../../redux/weatherReducer';
import { getTemp, getTime } from '../../untils/MyFunc';

let mapStateToProps = (state) => ({
    weather: state.weatherPage.theWeather
})

const WeatherInfoContainer = (props) => {

    let time = getTime(props.weather);

    let temp = getTemp(props.weather);
    
    return (
        < WeatherInfo temp={temp} time={time} weather={props.weather} getTheWeather={props.getTheWeather} />
    )

}


export default connect(mapStateToProps, { getTheWeather })(WeatherInfoContainer)