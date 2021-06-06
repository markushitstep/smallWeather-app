import React from 'react';
import styles from './WeatherInfo.module.css';

const WeatherInfo = (props) => {
   
    return (

        <div className={styles.weather}>
            { props.weather === null &&
                <div className={styles.current}>
                    <h3>Enter contry name</h3>
                </div>
            }
            { props.weather &&
                <div>
                    <div className={styles.current}>
                        <div className={styles.current_city}>{props.weather.name}</div>
                        <div className={styles.current_temperature}>{Math.ceil(props.temp.main.temp - props.temp.main.tempK)}°C</div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.details_row}>
                            <div className={styles.details_item}>
                                <div className={styles.details_name}>ощущается как</div>
                                <div className={styles.details_value}>{Math.ceil(props.temp.main.feels_like - props.temp.main.tempK)}°C</div>
                            </div>
                            <div className={styles.details_item}>
                                <div className={styles.details_name}>влажность</div>
                                <div className={styles.details_value}>{props.temp.main.humidity}%</div>
                            </div>
                        </div>
                        <div className={styles.details_row}>
                            <div className={styles.details_item}>
                                <div className={styles.details_name}>ветер</div>
                                <div className={styles.details_value}>{props.weather.wind.speed}м/c</div>
                            </div>
                            <div className={styles.details_item}>
                                <div className={styles.details_name}>состояние погоды</div>
                                <div className={styles.details_value}>{props.weather.weather[0].description}</div>
                            </div>
                        </div>

                    </div>
                </div>

            }

        </div>

    )
};


export default WeatherInfo