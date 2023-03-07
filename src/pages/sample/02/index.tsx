import {useEffect, useState} from 'react'
import {Box,Text,Center,Input} from '@chakra-ui/react'

function rolldice(){
    return Math.floor(Math.random()*6 + 1)
}

export default function Sample02(){

    const [state,setState] = useState(0)

    useEffect(()=>{
        setState(rolldice())
    },[])    

    return(
        <>
            <Box>
                <Text as={'p'}>サイコロの目:{state}</Text>
                <Input type='button' value='ふる'
                    onClick={()=> setState(rolldice())}
                />
            </Box>
        </>
    )
}