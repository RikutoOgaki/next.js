import { useState, useEffect } from 'react'
import { Box, Flex, Text, Select } from '@chakra-ui/react'
import style from '@/styles/09/index.module.css'
import Header from './components/Header'

type State = {
    weather: string,
    humidity: number,
    temp: number,
    city: string
}


export default function Number11() {

    const [state, setState] = useState<State>({
        weather: '',
        humidity: 0,
        temp: 0,
        city: ''
    })

    useEffect(() => {
        const APi = 'http://api.openweathermap.org/data/2.5/weather?q=Osaka&appid=4f17ae2f33d384ade5f214837f2b4d3d&lang=ja&units=metric'
        fetch(APi)
            .then(res => res.json())
            .then(json => {
                let weather = json.weather[0].main
                if (weather === 'Clear sky') {
                    weather = '晴れ'
                }
                if (weather === 'rain') {
                    weather = '雨'
                }
                else {
                    weather = '曇り'
                }
                setState({
                    ...state,
                    weather: weather,
                    humidity: json.main.humidity,
                    temp: Math.floor(json.main.temp),
                })
            })
    }, [])


    return (
        <>
            <Box w={'100%'} h={'100vh'} className={style.body}>
                <Header />
                <Box as='main' padding={'5rem 0 0 2rem'}>
                    <Flex color={'#fff'}>
                        <Text lineHeight={'10'}>2月1日の</Text>
                        <Select w={'10rem'}
                            onChange={(e) => {
                                if (e.target.value === 'osaka') {
                                    let APi = 'http://api.openweathermap.org/data/2.5/weather?q=Osaka&appid=4f17ae2f33d384ade5f214837f2b4d3d&lang=ja&units=metric'
                                    fetch(APi)
                                        .then(res => res.json())
                                        .then(json => {
                                            let weather = json.weather[0].main
                                            if (weather === 'Clear sky') {
                                                weather = '晴れ'
                                            }
                                            if (weather === 'rain') {
                                                weather = '雨'
                                            }
                                            else {
                                                weather = '曇り'
                                            }
                                            setState(() => {
                                                return {
                                                    ...state,
                                                    weather: weather,
                                                    humidity: json.main.humidity,
                                                    temp: Math.floor(json.main.temp),
                                                }
                                            })
                                        })
                                }
                                else if (e.target.value === 'nagoya') {
                                    let APi = 'http://api.openweathermap.org/data/2.5/weather?q=Nagoya&appid=4f17ae2f33d384ade5f214837f2b4d3d&lang=ja&units=metric'
                                    fetch(APi)
                                        .then(res => res.json())
                                        .then(json => {
                                            let weather = json.weather[0].main
                                            if (weather === 'Clear sky') {
                                                weather = '晴れ'
                                            }
                                            if (weather === 'rain') {
                                                weather = '雨'
                                            }
                                            else {
                                                weather = '曇り'
                                            }
                                            setState(() => {
                                                return {
                                                    ...state,
                                                    weather: weather,
                                                    humidity: json.main.humidity,
                                                    temp: Math.floor(json.main.temp),
                                                }
                                            })
                                        })
                                }
                                else if (e.target.value === 'tokyo') {
                                    let APi = 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=4f17ae2f33d384ade5f214837f2b4d3d&lang=ja&units=metric'
                                    fetch(APi)
                                        .then(res => res.json())
                                        .then(json => {
                                            let weather = json.weather[0].main
                                            if (weather === 'Clear sky') {
                                                weather = '晴れ'
                                            }
                                            if (weather === 'rain') {
                                                weather = '雨'
                                            }
                                            else {
                                                weather = '曇り'
                                            }
                                            setState(() => {
                                                return {
                                                    ...state,
                                                    weather: weather,
                                                    humidity: json.main.humidity,
                                                    temp: Math.floor(json.main.temp),
                                                }
                                            })
                                        })
                                }
                            }}
                        >
                            <option value="osaka">大阪</option>
                            <option value="nagoya">名古屋</option>
                            <option value="tokyo">東京</option>
                        </Select>
                    </Flex>

                    <Flex w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                        <Box>
                            <Box className={style.boll}></Box>
                        </Box>
                        <Flex flexDir={'column'} justifyContent={'center'} gap={'2rem'} margin={'0 3rem 0 0'}>
                            <Text as={'p'} fontSize={'1.6rem'} color={'#fff'} paddingTop={'5rem'} fontWeight={'bold'}>天候:{state.weather}</Text>
                            <Text as={'p'} fontSize={'1.6rem'} color={'#fff'} fontWeight={'bold'}>気温:{state.temp}℃</Text>
                            <Text as={'p'} fontSize={'1.6rem'} color={'#fff'} fontWeight={'bold'}>湿度:{state.humidity}%</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}