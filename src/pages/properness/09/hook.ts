import { Box, Flex, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

type State = {
    weather: string,
    humidity: number,
    temp: number
}


export function useCustomHook() {
    const [state, setState] = useState<State>({
        weather: '',
        humidity: 0,
        temp: 0
    })

    useEffect(() => {
        const weather = 'https://api.openweathermap.org/data/2.5/weather?lat=36.34&lon=130.99&appid=4f17ae2f33d384ade5f214837f2b4d3d'
        fetch(weather)
            .then(res => res.json())
            .then(json => {
                setState(() => {
                    if(json.weather[0].description === 'clear sky' ){
                        return{
                            ...state,
                            weather: '晴れ',
                            humidity: json.main.humidity,
                        }
                    }
                    else if(json.weather[0].description === 'rain'){
                        return{
                            ...state,
                            weather: '雨',
                            humidity: json.main.humidity,
                        }
                    }
                    else{
                        return{
                            ...state,
                            weather: '曇り',
                            humidity: json.main.humidity,
                        }
                    }
                })
            })
        const temphumidity = 'https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m&daily=temperature_2m_max&timezone=Asia%2FTokyo'
        fetch(temphumidity)
            .then(res => res.json())
            .then(json => {
                console.log(json.daily.temperature_2m_max[0]);
                setState(()=>{
                    return{
                        ...state,
                        temp:json.daily.temperature_2m_max[0]
                    }
                })
            })
    }, [])

    return [state]
}