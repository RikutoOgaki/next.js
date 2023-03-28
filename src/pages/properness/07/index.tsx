import { useCustomHook } from './hooks'
import { Flex, Text } from '@chakra-ui/react'

export default function Sample07() {

    const [state] = useCustomHook()

    return (
        <>
            <Flex
                w={'100%'}
                h={'100vh'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Text>{state.count}</Text>
            </Flex>
        </>
    )
}