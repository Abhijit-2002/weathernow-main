import React from 'react';
import './description.css';
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md';
const Description = ({weather,units}) => {

    const tempUnit = units==='metric' ? '°C': '°F';
    // const windUnit = units=== 'metric' ? 'Km/H' : 'Mi/H';
    const windUnit = units === 'metric'? 'M/S' : 'Mi/H';

    const cards = [
        {
            id:1,
            icon:<FaArrowDown/>,
            title: "Min",
            data:weather.temp_min.toFixed(),
            Unit: tempUnit,
        },
        {
            id:2,
            icon:<FaArrowUp/>,
            title: "Max",
            data:weather.temp_max.toFixed(),
            Unit: tempUnit,
        },
        {
            id:3,
            icon:<BiHappy/>,
            title: "Feels Like",
            data:weather.feels_like.toFixed(),
            Unit: tempUnit,
        },
        {
            id:4,
            icon:<MdCompress/>,
            title: "Pressure",
            data:weather.pressure,
            Unit: "hPa",
        },
        {
            id:5,
            icon:<MdOutlineWaterDrop/>,
            title: "Humidity",
            data:weather.humidity,
            Unit: '%',
        },
        {
            id:6,
            icon:<FaWind/>,
            title: "Wind Speed",
            data:weather.speed.toFixed(),
            Unit: windUnit,
        },
    ];

  return (
    <div className='section section_description'>
        {cards.map(({id,icon,title,data,Unit}) => (

            <div className="card" key={id} >
                <div  className="description_card-icon" aria-hidden="true">
                {icon}
                    <small className='small'>{title}</small>
                </div>
                <h2>{`${data} ${Unit}`}</h2>
            </div>

        ))}
        
    </div>
  )
}

export default Description