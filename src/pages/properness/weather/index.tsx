import { useEffect, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useCustomHook } from './hooks'

export default function weather() {

    const [state] = useCustomHook()

    return (
        <>
            <Box>
                <Text>天候</Text>
                <Text>{state.weather}</Text>
                <Text>気温</Text>
                <Text>{state.temp}</Text>
                <Text>湿度</Text>
                <Text>{state.humidity}</Text>
            </Box>
        </>
    )
}