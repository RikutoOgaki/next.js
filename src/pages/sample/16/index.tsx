import { useEffect, useState } from 'react'
import { Box, Input, Center, Flex, Text } from '@chakra-ui/react'

type State = {
    flag: boolean
}

function TextComponent() {
    useEffect(() => {
        console.log('useEffect(mount)');

        return () => {
            console.log('useEffect(unmount)');
        }
    }, [])
    return (
        <Box>XXXXXX</Box>
    )
}

export default function Sample16() {

    const [state, setState] = useState<State>({
        flag: false
    })

    return (
        <>
            <Box>
                <Text as={'p'}>TEST</Text>
                <Input type={'button'}
                    value={state.flag ? '表示->非表示' : '非表示->表示'}
                    onClick={() => setState({
                        ...state,
                        flag: !state.flag
                    })}
                ></Input>
                {
                    state.flag && <TextComponent />
                }
            </Box>
        </>
    )
}