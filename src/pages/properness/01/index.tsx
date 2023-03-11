import {useState} from 'react'
import {Box,Text,Flex,Center,Input} from '@chakra-ui/react'

type State = {
    count:number
}

export default function Number01(){

    const [state,setState] = useState<State>({
        count:0
    })

    return(
        <>
            <Box>
                <Text as={'h2'}>{state.count}</Text>
                <Input type='button' value='+'
                    onClick={()=> setState({
                        ...state,
                        count:state.count + 1
                    })}
                ></Input>
                <Input type='button' value='-'
                    onClick={()=> setState({
                        ...state,
                        count: state.count - 1
                    })}
                ></Input>
            </Box>
        </>
    )
}