import { useState } from 'react'
import { Box, Flex, Center, Input } from '@chakra-ui/react'
import Style from '@/styles/12/index.module.css'

type MenuProps = {
    flag: boolean,
    children: React.ReactNode
}

type MenuState = {
    flag: boolean
}

function Menu(props: MenuProps) {

    const [state, setState] = useState<MenuState>({
        flag: props.flag
    })

    return (
        <>
            <Box border={'1px solid #000'}>
                <button
                    onClick={() => setState({
                        ...state,
                        flag: !state.flag
                    })}
                >click me !!!</button>
                <Box className={!state.flag ? Style.hide : undefined}>{props.children}</Box>
            </Box>
        </>
    )
}

export default function Sample12() {
    return (
        <>
            <Box>
                <Menu flag={true}>
                    <p>クリックしてくれてありがとう！！</p>
                    <p>またクリックしてね！</p>
                </Menu>
            </Box>
        </>
    )
}