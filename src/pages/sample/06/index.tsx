import {useState} from 'react'
import {Box,Flex,Input,Text} from '@chakra-ui/react'

type State = {
    a:string,
    b:string,
    result:number
}

export default function Sample06(){

    const [state,setState] = useState<State>({
        a:'',
        b:'',
        result:0
    })

    return(
        <>
            <Box>
                <Text as={'p'} fontSize={'5xl'}>{state.result}</Text>
                <Input type="text" value={state.a}  w={'20%'}
                    onChange={(e)=> setState({
                        ...state,
                        a:e.target.value
                    })}
                />
                <Input type="text" value={state.b} w={'20%'}
                    onChange={(e)=> setState({
                        ...state,
                        b:e.target.value
                    })}
                />
                <Input type="button" value="calc"  w={'10%'}
                    onClick={()=> {
                        let numA = parseInt(state.a)
                        let numB = parseInt(state.b)
                        
                        setState({
                            ...state,
                            result: numA + numB
                        })
                    }}
                />
            </Box>
        </>
    )
}