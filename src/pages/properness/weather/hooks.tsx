import { Box, Flex, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

type State = {
    weather: string,
    humidity: number,
    temp: number
}


export function useCustomHook() {
    const [state, setState] = useState({
        weather: '',
        humidity: 0,
        temp: 0
    })

    useEffect(() => {
        const weather = 'https://api.openweathermap.org/data/2.5/weather?lat=36.34&lon=130.99&appid=4f17ae2f33d384ade5f214837f2b4d3d'
        fetch(weather)
            .then(res => res.json())
            .then(json => {
                setState((activeState) => {
                    return {
                        ...activeState,
                        weather: json.weather[0].description,
                        humidity: json.main.humidity,
                        temp: json.main.temp_max - 273.15
                    }
                })
            })
    }, [])

    return [state]
}