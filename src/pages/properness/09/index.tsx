import { Box, Text, Flex } from '@chakra-ui/react'
import Header from './components/Header'
import style from '@/styles/09/index.module.css'

// 立体的な天気のアイコンを作る
// 天気のさまざまな情報はstateで管理する

export default function Number09() {
    return (
        <>
            <Box w={'100%'} h={'100vh'} className={style.body}>
                <Header />
                <Box as='main'>
                    <Text>２月１日の東京の天気</Text>
                    <Flex w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                        <Box>
                            <Box className={style.boll}></Box>
                        </Box>
                        <Box>
                            <Text as={'p'} className={style.font}>天候</Text>
                            <Text as={'p'}>気温</Text>
                            <Text as={'p'}>気温</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}