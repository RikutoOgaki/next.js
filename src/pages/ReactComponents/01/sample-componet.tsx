import { useState } from 'react'
import { Box, Flex, Center, Text } from '@chakra-ui/react'

type State = {
    flag: boolean
}

export function Sample01Component() {

    const [state, setState] = useState<State>({
        flag: false
    })

    return (
        <>
            <Box>
                <Box>
                    <Text></Text>
                </Box>
                <Box>
                    <Text></Text>
                </Box>
                <Box>
                    <Text></Text>
                </Box>
            </Box>
        </>
    )
}