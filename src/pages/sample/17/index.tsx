import { useState } from 'react'
import { Box, Center, Input, Text, Flex } from '@chakra-ui/react'
import { Component } from './component'

type State = {
    count: number
}

export default function Sample17() {

    const [state, setState] = useState<State>({
        count: 0
    })

    return (
        <>
            <Text as={'h1'}>useContextSample(useContextなし)</Text>
            <Component
                count={state.count}
                onClickadd={() => setState({
                    ...state,
                    count: state.count + 1
                })}
                onClickminus={() => setState({
                    ...state,
                    count: state.count - 1
                })}
            />
        </>
    )
}