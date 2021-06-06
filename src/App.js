import './App.css';
import SearchContainer from './components/Search/SearchContainer';
import WeatherInfoContainer from './components/WeatherInfo/WeatherInfoContainer';

function App() {

  return (

    <div className="App">

      <SearchContainer />

      <div className='App-inner'>

        <WeatherInfoContainer/>

      </div>

    </div>

  );
}

export default App;
