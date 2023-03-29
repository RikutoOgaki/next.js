import { Box, Text, Flex, Input } from '@chakra-ui/react'
import { useState } from 'react'

type State = {
    name: string,
    number: string
}

export default function React() {

    const [state, setState] = useState<State>({
        name: '',
        number: ''
    })

    return (
        <>
            <Box>
                <Text>名前:{state.name}</Text>
                <Text>電話番号:{state.number}</Text>
                <button onClick={() => setState({
                    ...state,
                    name: '',
                    number: ''
                })}>Clear</button>
                <Flex justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100vh'}>
                    <Flex
                        flexDir={'column'}
                        w={'30rem'}
                        h={'15rem'}
                        backgroundColor={'#FDFCF5'}
                        boxShadow={'12px 12px 0 0 blue'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Text>Nmae</Text>
                        <Input
                            w={'20rem'}
                            border={'1px solid #000'}
                            onChange={(e) => setState({
                                ...state,
                                name: e.target.value
                            })}
                        />
                        <Text>Number</Text>
                        <Input
                            w={'20rem'}
                            border={'1px solid #000'}
                            onChange={(e) => setState({
                                ...state,
                                number: e.target.value
                            })}
                        />
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}