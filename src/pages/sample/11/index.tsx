import { useState } from 'react'
import { Box, Center, Flex, Text, Input } from '@chakra-ui/react'

type ParentState = {
    value: string
}

type ChildState = {
    value: string
}

type ChildProps = {
    onRikuto: (v: string) => void
}

function ChildComponents(props: ChildProps) {
    const [state, setState] = useState<ChildState>({
        value: ''
    })
    return (
        <Box>
            <Input type={'text'} value={state.value}
                onChange={(e) => setState({
                    ...state,
                    value: e.target.value
                })}
                onBlur={() => props.onRikuto(state.value)}
            ></Input>
        </Box>
    )
}

export default function Sample11() {

    const [state, setState] = useState<ParentState>({
        value: ''
    })

    return (
        <>
            <Box>
                <Text as={'p'}>親の内容{state.value}</Text>
                <ChildComponents onRikuto={(v) => setState({
                    ...state,
                    value: v
                })} />
            </Box>
        </>
    )
}