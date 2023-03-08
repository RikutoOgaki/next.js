import {useState} from 'react'
import {Box,Flex,Text,Input} from '@chakra-ui/react'

type Props = {
    count:number
}

function SampleComponent(props:Props = {count:0}){
    return(
        <Box>
            <Text as={'p'} fontSize={'5xl'}>{props.count}</Text>
        </Box>
    )
}

export default function Sample05(){

    const [state,setState] = useState(0)

    return(
        <>
            <Box>
                <Text as={'h1'} fontSize={'8xl'}>Sample05</Text>
                <SampleComponent count={state}/>
                <Input type='button' value={'add'}
                    onClick={()=> setState(state + 1)}
                />
                <Input type='button' value={'remove'}
                    onClick={()=> setState(state - 1)}
                />
            </Box>
        </>
    )
}