import { Box, Text, Flex } from '@chakra-ui/react'
import { useCustomHook } from './hook/hook'
import { useState } from 'react'
import Header from './components/Header'
import style from '@/styles/09/index.module.css'

// 立体的な天気のアイコンを作る
// 天気のさまざまな情報はstateで管理する

type State = {
    list: Array<string>
}

export default function Number09() {

    const [state] = useCustomHook()

    return (
        <>
            <Box w={'100%'} h={'100vh'} className={style.body}>
                <Header />
                <Box as='main' padding={'5rem 0 0 2rem'}>
                    <Flex color={'#fff'}>
                        <Text>2月1日の</Text>
                        <Box as='select' name="city" background={'none'}>
                            <Box as='option' value='osaka'>大阪</Box>
                            <Box as='option' value='nagoya'>名古屋</Box>
                            <Box as='option' value='tokyo'>東京</Box>
                        </Box>
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