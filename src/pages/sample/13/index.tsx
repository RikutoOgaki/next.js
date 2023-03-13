import { useState } from 'react'
import { Box, Flex, Input, Text } from '@chakra-ui/react'

type InputComponentState = {
    value: string
}

type InputComponentProps = {
    handleClear: () => void,
    handleEditComponet: (v: string) => void
}

function InputComponent(props: InputComponentProps) {
    const [state, setState] = useState<InputComponentState>({
        value: ''
    })
    return (
        <>
            <Box>
                <Text as={'p'}>{state.value}</Text>
                <Input type={'text'} value={state.value}
                    onChange={(e) => setState({
                        ...state,
                        value: e.target.value
                    })}
                    onBlur={() => props.handleEditComponet(state.value)}
                ></Input>
                <Input type={'button'} value={'CLEAR'}
                    onClick={() => {
                        setState({
                            ...state,
                            value: ''
                        })
                        props.handleClear()
                    }}
                ></Input>
            </Box>
        </>
    )
}

export default function Sample13() {
    return (
        <>
            <Box>
                <Text as={'h1'}>Sample13</Text>
                <InputComponent
                    handleClear={() => {
                        console.log('CLEAR');
                    }}
                    handleEditComponet={(v) => {
                        console.log('EDIT!!!' + v);
                    }}
                />
            </Box>
        </>
    )
}