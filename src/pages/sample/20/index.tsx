import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Box, Flex, Input, Text } from '@chakra-ui/react'

export default function Sample20() {

    const [state, setState] = useState({
        pro: [
            { code: '1000', name: 'name1', category: 'cath1', quantity: '1' },
            { code: '2000', name: 'name2', category: 'cath1', quantity: '3' },
            { code: '3000', name: 'name3', category: 'cath1', quantity: '2' },
            { code: '4000', name: 'name4', category: 'cath1', quantity: '4' }
        ]
    })

    return (
        <>
            <Box>
                <Text as={'h1'}>DataTable</Text>
                <DataTable value={state.pro}>
                    <Column field='code' header='Code'></Column>
                    <Column field='name' header='Name'></Column>
                    <Column field='category' header='Category'></Column>
                    <Column field='quantity' header='Quantity'></Column>
                </DataTable>
            </Box>
        </>
    )
}