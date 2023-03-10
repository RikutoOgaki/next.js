import {useState} from 'react'
import {Box,Flex,Center,Text} from '@chakra-ui/react'

export default function Condition(){

    // 等価演算子
    console.log(1 == 1);
    // 同じ型、同じ値の大きさなのでtrueを返す

    console.log('hello' == 'hello');
    //文字列の比較の場合、同じ文字を同じ順番で持っているかを見る（今回は文字数、文字順、同じ文字があるのでtrue）
    
    console.log('1' == 1);
    // 文字列を数値を比較しており、文字列を数値に変換しようを試みる
    // (今回は文字列の１を数値に変換し、値が同じなのでtureが変える)

    console.log(0 == false);
    // 

    // 入っている数値または文字列の総称を「オペランド」をいう
    
    
    
    



    return(
        <>
            <Box>
                <Text as={'h1'}>JavaScript/TypeScriptの等値演算子について</Text>
            </Box>
        </>
    )
}