import {useState} from 'react'
import {Box,Center,Flex,Input,Text} from '@chakra-ui/react'
import {SampleComponent} from './sample-component'


type Sample03Component = {
    memo:string
}

export default function Sample03(){

    const [state,setState] = useState<Sample03Component>({
        memo:'XXX'
    })

    return(
    <>
        <Box>
            <Text as={'h1'} fontSize={'8xl'}>Sample03</Text>
            <Box>
                <Text as={'p'} fontSize={'2xl'}>親の内部状態は {state.memo}</Text>
                <SampleComponent memo={state.memo} 
                    onRikuto={(v)=> setState({
                        ...state,
                        memo:v
                    })}
                />
            </Box>
        </Box>
    </>
    )
}