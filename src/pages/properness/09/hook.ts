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
        const weather = 'http://api.openweathermap.org/data/2.5/weather?q=Osaka&appid=4f17ae2f33d384ade5f214837f2b4d3d&lang=ja&units=metric'
        fetch(weather)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setState(() => {
                    if(json.weather[0].description === 'clear sky' ){
                        return{
                            ...state,
                            weather: '晴れ',
                            humidity: json.main.humidity,
                            temp:Math.ceil(json.main.temp)
                        }
                    }
                    else if(json.weather[0].description === 'rain'){
                        return{
                            ...state,
                            weather: '雨',
                            humidity: json.main.humidity,
                            temp:Math.ceil(json.main.temp)
                        }
                    }
                    else{
                        return{
                            ...state,
                            weather: '曇り',
                            humidity: json.main.humidity,
                            temp:Math.ceil(json.main.temp)
                        }
                    }
                })
            })
    }, [])

    return [state]
}