import { useEffect, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function weather() {

    const [state, setState] = useState({
        weather: '',
        list: []
    })

    // weatherで天候が取れる
    // 

    useEffect(() => {
        const weather = 'https://api.openweathermap.org/data/2.5/weather?lat=36.34&lon=130.99&appid=4f17ae2f33d384ade5f214837f2b4d3d'
        fetch(weather)
            .then(res => res.json())
            .then(json => {
                console.log(json.weather[0].main);
                console.log(json);
                setState({
                    ...state,
                    weather: json.weather.main
                })
            })
    }, [])

    return (
        <>
            <Box>
                <Text></Text>
            </Box>
        </>
    )
}