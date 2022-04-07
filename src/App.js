import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {

  const apiKey = process.env.REACT_APP_APIKEY;
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setcity] = useState('');

  const getWeather = async (e) => {
    if (e.key === 'Enter') {
      try {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        setWeatherData(res.data);
      } catch (error) {
        alert(error)
      }
       
      setcity('');
    }
    
  }

  const [users, setusers] = useState([]);

  // useEffect( ()=> {
  //   axios.get('http://localhost:8000/users')
  //   .then(ress => {
  //     console.log(ress.data)
  //     setusers(ress.data)
  //   })
  // }, [])

  useEffect(()=> {
    axios.get('http://localhost:8000/arrs')
    .then(resultss => {
      console.log(resultss.data);
      setusers(resultss.data)
    })
  },[])


  return (
    <div>
      
      <input type='text' placeholder='Enter City...' onKeyPress={getWeather} value={city} onChange={(e)=> {setcity(e.target.value)}}/>

      { typeof weatherData.main === 'undefined' ? (
      <div>
        <p>Please Enter a city name to get the data</p>
      </div>) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)} oF</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}

      {/* {users.map( user => {
        return (<div key={user.id}>
          <h4>{user.title}</h4>
        </div>)
      } )} */}

      {
        users.map(({id, bankName, balance, price})=> {
          return (
            <div key={id}>
              <p>{bankName}</p>
              <p>{balance}</p>
              <p>{price}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
