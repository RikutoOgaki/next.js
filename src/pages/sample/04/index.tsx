import {useState} from 'react'
import {Box,Text,Flex,Input} from '@chakra-ui/react'


type Props = {
    message:string
}

function Sample04Component(props:Props = {message:'value'}){
    return(
        <Box>
            <Text fontSize={'6xl'}>{props.message}</Text>
        </Box>
    )
}

export default function Sample04(){
    return (
        <>
        <Box>
            <Text as={'h1'} fontSize={'8xl'}>Sample04</Text>
            <Sample04Component message='hello'/>
        </Box>
        </>
    )
}