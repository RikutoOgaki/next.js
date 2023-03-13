import { Box, Flex, Center, Text, Container } from '@chakra-ui/react'

export default function Sample10Components() {
    // 文章のようなコンテンツがあればスタイルが適用させる
    return (
        <>
            <header>
                <Container maxW={'container.xl'} backgroundColor={'tomato'}>
                    レスポンス対応させている
                </Container>
            </header>
        </>
    )
}