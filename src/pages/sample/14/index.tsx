import { useState } from 'react'
import { Box, Center, Flex, Text, Input } from '@chakra-ui/react'

type Item = {
    id: number,
    label: string
}

type SampleState = {
    list: Array<Item>
}

export default function Sample14() {

    const [state, setState] = useState<SampleState>({
        list: [
            { id: 1, label: 'sample01' },
            { id: 2, label: 'sample02' },
            { id: 3, label: 'sample03' },
            { id: 4, label: 'sample04' }
        ]
    })

    return (
        <>
            <Box>
                <Text as={'h1'}>state内にある配列の部分更新</Text>
                {state.list.map((v) =>
                    <Box key={v.id}>
                        <Input type={'text'} value={v.label}
                            onChange={(e) => setState({
                                ...state,
                                list: state.list.map((x) =>
                                    v.id === x.id ?
                                        { ...x, label: e.target.value } : x
                                )
                            })}
                        ></Input>
                        <Input type={'button'} value={'JSON出力'}
                            onClick={() => {
                                console.log(v);
                            }}
                        ></Input>
                    </Box>
                )}
            </Box>
        </>
    )
}