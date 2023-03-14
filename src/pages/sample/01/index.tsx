import { useState } from 'react'
import { Box, Center, Text, Flex, Input } from '@chakra-ui/react'

export default function Sample01() {

    const [state, setState] = useState(0)

    return (
        <>
            <Box>
                <Text as={'h1'} fontSize={'4rem'} textAlign={'center'}>Sample01</Text>
                <Center>
                    <Text as={'p'} fontSize={'1.6rem'}>{state}</Text>
                    <Flex flexDir={'column'} justifyContent={'center'} marginLeft={'2rem'}>
                        <Input type="button" value="プラス"
                            onClick={() => setState(state + 1)}
                        />
                        <Input type="button" value="マイナス"
                            onClick={() => setState(state - 1)}
                        />
                    </Flex>
                </Center>
            </Box>
        </>
    )
}