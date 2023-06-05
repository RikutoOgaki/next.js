import { Box, Center, Flex, Input, Text, VStack } from '@chakra-ui/react'

export default function ChakraUI02() {
    return (
        <>
            <Box>
                <Text as={'h1'} fontSize={'7xl'}>レスポンス対応しているfontSizeについて</Text>
                <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} w={'full'} h={'100vh'}>
                    {/* <VStack spacing={6}>
                    <VStack spacing="-2"> */}
                    <Text fontFamily="Montserrat" fontSize={{ base: "sm", md: "md" }}>
                        hello
                    </Text>
                    <Text fontSize={{ base: "4xl", md: "7xl" }} letterSpacing={1} fontWeight="semibold" fontFamily="Montserrat">
                        Rikuto Ogaki
                    </Text>
                    <Text fontFamily="Montserrat" fontSize={{ base: "sm", md: "md" }}>
                        web front-end developer & design
                    </Text>
                    {/* </VStack>
                    </VStack> */}
                </Flex>
            </Box>
        </>
    )
}