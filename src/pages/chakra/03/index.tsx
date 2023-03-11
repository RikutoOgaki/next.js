import {useState} from 'react'
import {Box,Flex,Center,Text,Input} from '@chakra-ui/react'

export default function ChakraUI03(){
    return(
        <>
            <Box>
                <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
                    This is responsive text
                </Text>
                <Box bg='red.200' w={[300, 400, 500]}>
                    This is a box
                </Box>
            </Box>
        </>
    )
}