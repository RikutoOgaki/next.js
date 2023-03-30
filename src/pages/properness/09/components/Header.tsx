import { Box, Flex, Text } from '@chakra-ui/react'

export default function Header() {
    return (
        <>
            <Box position={'absolute'} top={'0'} w={'100%'}>
                <header>
                    <Flex justifyContent={'flex-end'} w={'full'} h={'full'}>
                        <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} gap={'1rem'} margin={'2rem 2rem 0 0'}>
                            <Text as={'span'} w={'4rem'} border={'2px solid #fff'}></Text>
                            <Text as={'span'} w={'4rem'} border={'2px solid #fff'}></Text>
                            <Text as={'span'} w={'4rem'} border={'2px solid #fff'}></Text>
                        </Flex>
                    </Flex>
                </header>
            </Box>
        </>
    )
}