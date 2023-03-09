import {Box,Center,Flex,Input,Text} from '@chakra-ui/react'

export default function ChakraUI02(){
    return(
        <>
            <Box>
                <Text as={'h1'}>レスポンス対応しているfontSizeについて</Text>
                <Box>
                    <Text 
                        as={'h2'}
                        fontSize={{base:'5xl',md:'3xl'}}
                        >mainContents</Text>
                </Box>
            </Box>
        </>
    )
}