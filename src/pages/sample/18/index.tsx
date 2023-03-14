import { useState } from 'react'
import { Box, Flex, Center, Input, Button, Text } from '@chakra-ui/react'
import { Component } from './component'
import { SampleContext } from './context'

type State = {
    count: number
}

export default function Sample18() {

    const [state, setState] = useState<State>({
        count: 0
    })

    return (
        <>
            <Box>
                <Text as={'h1'}>useContext Sample</Text>
                <SampleContext.Provider value={{ state }} />
                <Component />
                <Button onClick={() => setState({
                    ...state,
                    count: state.count + 1
                })}></Button>
                <Button onClick={() => setState({
                    ...state,
                    count: state.count - 1
                })}></Button>
            </Box>
        </>
    )
}