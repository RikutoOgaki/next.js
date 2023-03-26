import { Box, Table, Tr, Th, Td, Thead, Tbody } from '@chakra-ui/react'

type Props = {
    year: number,
    month: number
}

function IdxByDay(day: number) {
    if (day === 0) {
        // 0:日曜だけ特別扱い
        return 6
    }

    return day - 1
}

export function Calender(props: Props) {
    const numYear = props.year
    const numMonh = props.month
    const date = new Date(numYear, numMonh - 1, 1)

    const week = ['月', '火', '水', '木', '金', '土', '日']
    const tab = [
        new Array(7).fill(''),
        new Array(7).fill(''),
        new Array(7).fill(''),
        new Array(7).fill(''),
        new Array(7).fill(''),
        new Array(7).fill('')
    ]

    const targetMonth = date.getMonth()
    let rowIdx = 0

    while (date.getMonth() === targetMonth) {
        tab[rowIdx][IdxByDay(date.getDay())] = date.getDate()

        if (date.getDay() === 0) {
            // 0:日曜なら終端に来たとみなす
            rowIdx++
        }

        date.setDate(date.getDate() + 1)
    }

    return (
        <>
            <Box>
                <Table>
                    <Thead>
                        <Tr>
                            {week.map((v, idx) =>
                                <Th key={idx}>{v}</Th>
                            )}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tab.map((x, idx) =>
                            <Tr key={idx}>
                                {x.map((v, idx) =>
                                    <Td key={idx}>{v}</Td>
                                )}
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </Box>
        </>
    )
}