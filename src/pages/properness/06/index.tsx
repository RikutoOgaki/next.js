import { useState } from 'react'
import { Box, Input, Text, Flex } from '@chakra-ui/react'
import { Calender } from './calender'


type State = {
    year: number,
    month: number
}

export default function Sample06() {

    const d = new Date
    const [state, setState] = useState<State>({
        year: d.getFullYear(),
        month: d.getMonth() + 1
    })

    return (
        <>
            <Box>
                <Flex>
                    <Flex>
                        <Input type={'button'} value={'prev'}
                            onClick={() => {
                                setState({
                                    ...state,
                                    year: state.year - 1
                                })
                                if (state.year === 1900) {
                                    setState({
                                        ...state,
                                        year: 2500
                                    })
                                }
                            }}
                        ></Input>
                        <Text>{state.year}</Text>
                        <Input type={'button'} value={'next'}
                            onClick={() => {
                                setState({
                                    ...state,
                                    year: state.year + 1
                                })
                                if (state.year === 2500) {
                                    setState({
                                        ...state,
                                        year: 1900
                                    })
                                }
                            }}
                        ></Input>
                    </Flex>
                    <Flex>
                        <Input type={'button'} value={'prev'}
                            onClick={() => {
                                setState({
                                    ...state,
                                    month: state.month - 1
                                })
                                if (state.month === 1) {
                                    setState({
                                        ...state,
                                        month: 12
                                    })
                                }
                            }}
                        ></Input>
                        <Text>{state.month}</Text>
                        <Input type={'button'} value={'next'}
                            onClick={() => {
                                setState({
                                    ...state,
                                    month: state.month + 1
                                })
                                if (state.month === 12) {
                                    setState({
                                        ...state,
                                        month: 1
                                    })
                                }
                            }}
                        ></Input>
                    </Flex>
                </Flex>
                <Calender year={state.year} month={state.month} />
            </Box>
        </>
    )
}