import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

import SearchBox from "./components/search-box/Search.component";
import Location from "./components/location/Location.component";

const api = {
    key : '5dcfd0d27af4ae8b51333dad94f96a3e',
    base: 'http://api.openweathermap.org/data/2.5/',
}

function App() {
    
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async event => {
        if (event.key === 'Enter') {
            axios.get(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(response => {
                    setWeather(response.data)
                    setQuery('')
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        
        return `${day} ${date} ${month} ${year}`
    }
    
        return (
            <div className={
                (typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : (weather.main.temp <= 0) ? 'app snow' : 'app') : 'app'}>
                <main>
                    <SearchBox setQuery={setQuery} query={query} search={search}/>
                    {(typeof weather.main != "undefined") ? ( <Location  weather={weather} dateBuilder={dateBuilder} /> ) : ('')}
                </main>
            </div>
        );
}

export default App;
