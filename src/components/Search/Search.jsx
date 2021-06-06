import React, {  useState } from 'react';
import styles from './Search.module.css';

const Search = (props) => {
    
    const [city, searchWeather] = useState();

    const getCity = (e) => {
        searchWeather(e.currentTarget.value);

    }
    
    return (
        
            <div className={styles.searchBlock}>

                <div className={styles.searchBlock_input}>
                    <input onChange={getCity} placeholder='Search city' />
                </div>
                <div>
                    <button onClick={() => { props.getTheWeather(city) }} type='submit'>Get Weather</button>
                </div>
                {
                    props.errorAPI && <i>
                        {props.errorAPI}
                    </i>
                }
            </div>

    )
};

export default Search