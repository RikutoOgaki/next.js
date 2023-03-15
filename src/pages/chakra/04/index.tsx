import { useState } from 'react'
import {
    Box, Flex, Center, Text, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

// chakra-UIを使ってtableを作ってみる

export default function Chakra04() {
    return (
        <>
            <TableContainer>
                <Table border={'1px solid #000'}>
                    <Thead>
                        <Tr>
                            <Th colSpan={5} textAlign={'center'} bg={'#000'} color={'#fff'}>Time Table</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td textAlign={'center'}>月曜日</Td>
                            <Td textAlign={'center'}>火曜日</Td>
                            <Td textAlign={'center'}>水曜日</Td>
                            <Td textAlign={'center'}>木曜日</Td>
                            <Td textAlign={'center'}>金曜日</Td>
                        </Tr>
                        <Tr>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>月曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>火曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>水曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>木曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>金曜日</Td>
                        </Tr>
                        <Tr>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>月曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>火曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>水曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>木曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>金曜日</Td>
                        </Tr>
                        <Tr>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>月曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>火曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>水曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>木曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>金曜日</Td>
                        </Tr>
                        <Tr>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>月曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>火曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>水曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>木曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>金曜日</Td>
                        </Tr>
                        <Tr>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>月曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>火曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>水曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>木曜日</Td>
                            <Td textAlign={'center'} w={'10em'} h={'7em'}>金曜日</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th colSpan={5} textAlign={'center'}>afterschool</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}