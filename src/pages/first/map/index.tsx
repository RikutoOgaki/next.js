import {useState} from 'react'
import {Box,Flex,Center,Text,Input} from '@chakra-ui/react'


export default function Map(){

    const array = [1,2,3,4,5]

    const array2 = array.map(x => x*5)
    // mapは配列のある数だけ新しい配列を生成する
    // xの引数にはarrayの値が入っていて、アロー関数以降は処理が書かれている
    // （今回は、もともとあったarrayを新しい配列で生成して、その値に３かけた数字が配列として在る）

    console.log(array2);
    


    return(
        <>
            <Box>
                <Text as={'h1'}>mapについて</Text>
                <Text as={'p'}>console.logを確認する</Text>
            </Box>
        </>
    )
}