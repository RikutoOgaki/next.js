import {useState} from 'react'
import {Box,Center,Flex,Input,Text} from '@chakra-ui/react'

type State = {
    task:string,
    list:Array<string>
}

export default function Sample08(){

    const [state,setState] = useState<State>({
        task:'',
        list:[]
    })

    return(
        <>
            <Box>
                <Box as='header'>
                    <Text as={'h1'}>Sample08</Text>
                </Box>
                <Box as='div'>
                    <Input type='text' value={state.task}
                        onChange={(e)=> setState({
                            ...state,
                            task:e.target.value
                        })}
                    ></Input>
                    <Input type='button' value='追加'
                        onClick={()=> setState({
                            ...state,
                            task:'',
                            list:[
                                ...state.list,
                                state.task
                            ]
                        })}
                    ></Input>
                    {state.list.map((v,idx)=>
                        <Box key={idx}>
                            <Text as={'p'}>{v}</Text>
                            <Input type='button' value='削除'
                                onClick={()=> setState({
                                    ...state,
                                    list:state.list.filter((v,idx2) => idx !== idx2)
                                })}
                            ></Input>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    )
}