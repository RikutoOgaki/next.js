import { useState } from 'react'
import { Box, Input, Flex, Text } from '@chakra-ui/react'
import { useCustomState } from './hooks'

export default function Sample15() {

    const [state, { plus, minus, set }] = useCustomState()

    return (
        <>
            <Box>
                <Text as={'h1'}>カスタムフックについて</Text>
                <Text as={'p'}>{state.count}</Text>
                <Input type={'button'} value={'PLUS'} onClick={() => plus()}></Input>
                <Input type={'button'} value={'MINUS'} onClick={() => minus()}></Input>
                <Input type={'button'} value={'RESET'} onClick={() => set()}></Input>
            </Box>
        </>
    )
}