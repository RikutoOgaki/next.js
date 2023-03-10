import {useState} from 'react'
import {Box,Flex,Center,Input,Text} from '@chakra-ui/react'

type State = {
    task:string
}

type List = {
    list:Array<string>
}

export default function Sample09(){

    const [state,setState] = useState<State>({
        task:''
    })

    const [list,setList] =useState<List>({
        list:[]
    })


    return(
        <>
            <Box>
                <Text as={'h1'}>Sample09(Sample08の書き方を少し変えたもの)</Text>
                <Input type='text' value={state.task}
                    onChange={(e)=> setState({
                        ...state,
                        task:e.target.value
                    })}
                ></Input>
                <Input type='button' value='追加'
                    onClick={()=> setList({
                        ...list,
                        list:[
                            ...list.list,
                            state.task
                        ]
                    })}
                ></Input>
                {list.list.map((v,idx)=>
                    <Box key={idx}>
                        <Text as={'p'}>{v}</Text>
                        <Input type='button' value='削除'
                            onClick={()=> setList({
                                ...list,
                                list:list.list.filter((v,idx2) => idx !== idx2)
                            })}
                        ></Input>
                    </Box>
                )}
            </Box>
        </>
    )
}