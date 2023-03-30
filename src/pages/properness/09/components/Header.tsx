import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import style from './header.module.css'

type Menu = {
    flg: boolean,
    children: React.ReactNode
}

type MenuState = {
    flg: boolean
}

export default function Header() {

    function Menu(props: Menu) {
        const [state, setState] = useState<MenuState>({
            flg: props.flg
        })
        return (
            <>
                <Box>
                    <Flex
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'1rem'}
                        margin={'2rem 2rem 0 0'}
                        onClick={() => setState({
                            ...state,
                            flg: !state.flg
                        })}
                    >
                        <Text as={'span'} w={'4rem'} border={'2px solid #fff'}></Text>
                        <Text as={'span'} w={'4rem'} border={'2px solid #fff'}></Text>
                        <Text as={'span'} w={'4rem'} border={'2px solid #fff'}></Text>
                        <Flex
                            className={style.hide}
                            flexDir={'column'}
                            justifyContent={'flex-start'}
                            // alignItems={'right'}
                            color={'#fff'}
                        >{props.children}</Flex>
                    </Flex>
                </Box>
            </>
        )
    }
    return (
        <>
            <Box position={'absolute'} top={'0'} w={'100%'}>
                <header>
                    <Flex justifyContent={'flex-end'} w={'full'} h={'full'}>
                        <Menu flg={true}>
                            <Text>ホーム</Text>
                            <Text>今の現状</Text>
                            <Text>プロフィール</Text>
                            <Text>設定</Text>
                            <Text>→戻る</Text>
                        </Menu>
                    </Flex>
                </header>
            </Box>
        </>
    )
}