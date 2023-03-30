import { Box, Text, Flex } from '@chakra-ui/react'
import { useCustomHook } from './hook/hook'
import { useState } from 'react'
import Header from './components/Header'
import style from '@/styles/09/index.module.css'

// 立体的な天気のアイコンを作る
// 天気のさまざまな情報はstateで管理する



export default function Number09() {

    const [state] = useCustomHook()

    return (
        <>
            <Box w={'100%'} h={'100vh'} className={style.body}>
                <Header />
                <Box as='main'>
                    <Text padding={'10rem 0 0 4rem'} color={'#fff'}>
                        <Text as='span' fontSize={'2rem'}>2</Text>
                        月<Text as={'span'} fontSize={'2rem'}>1</Text>
                        日の<Text as='span' fontSize={'2rem'}>東京</Text>
                    </Text>
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