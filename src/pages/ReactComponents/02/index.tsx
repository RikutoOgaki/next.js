import { useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

type State = {
    num: number
}

export default function React() {

    const [state, setState] = useState<State>({
        num: 0
    })

    return (
        <>
            <Box>
                <Text>{state.num}</Text>
                <input type="button" value={'add'}
                    onClick={() => setState({
                        ...state,
                        num: state.num + 1
                    })}
                />
                <input type="button" value={'remove'}
                    onClick={() => setState({
                        ...state,
                        num: state.num - 1
                    })}
                />
            </Box>
        </>
    )
}