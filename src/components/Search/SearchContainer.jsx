import { connect } from 'react-redux';
import Search from './Search';
import { getTheWeather } from '../../redux/weatherReducer';

let mapStateToProps = (state) =>({
    weather: state.weatherPage.theWeather,
    errorAPI: state.weatherPage.errorAPI
})

export default  connect(mapStateToProps, { getTheWeather }) (Search) 