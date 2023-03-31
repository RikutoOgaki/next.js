import { Box, Flex, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

type State = {
    weather: string,
    humidity: number,
    temp: number,
    city:Array<string>,
    list:Array<string>
}


// APIのリンクを配列で持たせて、選択した都市をfetchするようにする
// 予想 都市名とリンクが一致するようにkeyなどを一致させてややる

export function useCustomHook() {
    const [state, setState] = useState<State>({
        weather: '',
        humidity: 0,
        temp: 0,
        city:['大阪','名古屋','東京'],
        list:[
            'http://api.openweathermap.org/data/2.5/weather?q=Osaka&appid=4f17ae2f33d384ade5f214837f2b4d3d&lang=ja&units=metric',
            'http://api.openweathermap.org/data/2.5/weather?q=Nagoya&appid=4f17ae2f33d384ade5f214837f2b4d3d&lang=ja&units=metric',
            'http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=4f17ae2f33d384ade5f214837f2b4d3d&lang=ja&units=metric'
        ]
    })

    useEffect(() => {
        console.log(state);
        
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