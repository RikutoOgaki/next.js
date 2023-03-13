import { useState } from 'react'
import { Box, Flex, Text, Input } from '@chakra-ui/react'
import { type } from 'os'

type State = {
    task: string,
    list: Array<string>
}

export default function Number02() {

    const [state, setState] = useState<State>({
        task: '',
        list: []
    })


    return (
        <>
            <Flex justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100vh'}>
                <Box>
                    <Box>
                        <Input type={'text'} value={state.task} w={'20em'}
                            onChange={(e) => setState({
                                ...state,
                                task: e.target.value
                            })}
                        ></Input>
                        <Input type={'button'} value='追加' w={'15em'} onClick={() => setState({
                            ...state,
                            list: [
                                ...state.list,
                                state.task
                            ]
                        })}
                        ></Input>
                        <Box w={'35em'} h={'30em'} border={'1px solid #000'} borderRadius={'15px'} textAlign={'center'} overflow={'scroll'}>
                            {state.list.map((v, idx) =>
                                <Box key={idx} display={'flex'} justifyContent={'center'} margin={'1em'}>
                                    <Text as={'p'} w={'20em'} lineHeight={10}>{v}</Text>
                                    <Input type={'button'} value='削除' w={'10em'} appearance={'none'}
                                        onClick={() => setState({
                                            ...state,
                                            list: state.list.filter((v, idx2) => idx !== idx2)
                                        })}
                                    ></Input>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}