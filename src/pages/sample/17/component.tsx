import { Box, Text, Flex, Button } from '@chakra-ui/react'

export function Component(props: {
    count: number,
    onClickadd: () => void,
    onClickminus: () => void
}) {
    return (
        <>
            <Text as={'p'}>{props.count}</Text>
            <Button onClick={() => props.onClickadd()}>ADD</Button>
            <Button onClick={() => props.onClickminus()}>MINUS</Button>
        </>
    )
}