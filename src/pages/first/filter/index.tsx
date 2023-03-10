import {useState} from 'react'
import {Box,Flex,Center,Text} from '@chakra-ui/react'

export default function Filter(){

    const array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','aaaaaa']
    
    // filterは元のある配列から新しい配列を生成するが、アロー関数以降の条件と一致する関数（いわばtrue）のものだけを残し、残りは除外する
    const result = array.filter(map => map.length>6)
    // 文字数が６文字以上のものを残す

    const result2 = array.filter(mini => mini.length===6)

    console.log(result);
    console.log(result2);
    
    

    return(
        <>
            <Box>
                <Text as={'h1'}>filterについて</Text>
                <Text as={'p'}>console.logを確認する</Text>
            </Box>
        </>
    )
}