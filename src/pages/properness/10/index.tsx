import { Box, Flex, Text } from '@chakra-ui/react'
import { ActionTypes, reducer } from './reducer'
import { useReducer } from 'react'

export default function Number10() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <>
            <Box>
                <Text as={'h1'}>Reducerについて</Text>
                <Text>{state.count}</Text>

                <button onClick={() => dispatch({ type: ActionTypes.PLUS })}>add</button>
                <button onClick={() => dispatch({ type: ActionTypes.MINUS })}>minus</button>
                <button onClick={() => dispatch({ type: ActionTypes.SET, payload: { count: 0 } })}>reset</button>
            </Box>
        </>
    )
}