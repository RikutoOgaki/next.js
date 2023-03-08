import {useState} from 'react'
import {Box,Flex,Center,Input,Text} from '@chakra-ui/react'

type ParentState = {
    value:string
}

type ChildState = {
    value:string
}

type ChildProps = {
    onRikuto : (v:string) => void
}

function ChildComponent(props:ChildProps){
    const [state,setState] = useState<ChildState>({
        value:''
    })
    return(
        <>
            <Box>
                <Input type='text' value={state.value}
                    onChange={(e)=> setState({
                        ...state,
                        value:e.target.value
                    })}
                    onBlur={()=> props.onRikuto(state.value)}
                />
            </Box>
        </>
    )
}

export default function Sample07(){

    const [state,setState] = useState<ParentState>({
        value:''
    })

    return(
        <>
            <Box>
                <Text as={'h1'}>Sample07</Text>
                <Text as={'p'}>{state.value}</Text>
                <Box>
                    <ChildComponent
                        onRikuto={(v)=> setState({
                            ...state,
                            value:v
                        })}
                    />
                </Box>
            </Box>
        </>
    )
}