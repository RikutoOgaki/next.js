import { useState } from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Style from '@/styles/01/index.module.css'

export default function index() {
  return (
    <>
      <Box>
        <Flex justifyContent={'center'}>
          <Text as={'h1'} fontSize={'4rem'}>My next.js study</Text>
        </Flex>
        <Box w={'80%'} margin={'0 auto'} border={'1px solid #000'} padding={'2rem'}>
          <Text as={'p'}>ReactTemplate</Text>
          <ul>
            <li><Link href={'/sample/01'} className={Style.under}>smaple01</Link></li>
            <li><Link href={'/sample/02'} className={Style.under}>smaple02</Link></li>
            <li><Link href={'/sample/03'} className={Style.under}>smaple03</Link></li>
            <li><Link href={'/sample/04'} className={Style.under}>smaple04</Link></li>
            <li><Link href={'/sample/05'} className={Style.under}>sample05</Link></li>
            <li><Link href={'/sample/06'} className={Style.under}>sample06</Link></li>
            <li><Link href={'/sample/07'} className={Style.under}>sample07</Link></li>
            <li><Link href={'/sample/08'} className={Style.under}>sample08</Link></li>
            <li><Link href={'/sample/09'} className={Style.under}>sample09</Link></li>
            <li><Link href={'/sample/10'} className={Style.under}>sample10</Link></li>
            <li><Link href={'/sample/11'} className={Style.under}>sample11</Link></li>
            <li><Link href={'/sample/12'} className={Style.under}>sample12</Link></li>
            <li><Link href={'/sample/13'} className={Style.under}>sample13</Link></li>
            <li><Link href={'/sample/14'} className={Style.under}>sample14</Link></li>
            <li><Link href={'/sample/15'} className={Style.under}>sample15</Link></li>
            <li><Link href={'/sample/16'} className={Style.under}>sample16</Link></li>
            <li><Link href={'/sample/17'} className={Style.under}>sample17</Link></li>
            <li><Link href={'/sample/18'} className={Style.under}>sample18</Link></li>
            <li><Link href={'/sample/19'} className={Style.under}>sample19</Link></li>
            <li><Link href={'/sample/20'} className={Style.under}>sample20</Link></li>
          </ul>
        </Box>
        <Box w={'80%'} margin={'0 auto'} border={'1px solid #000'} padding={'2rem'}>
          <Text as={'p'}>chakra-UI Template</Text>
          <ul>
            <li><Link href={'/chakra/01'} className={Style.under}>smaple01</Link></li>
            <li><Link href={'/chakra/02'} className={Style.under}>smaple02</Link></li>
            <li><Link href={'/chakra/03'} className={Style.under}>smaple03</Link></li>
            <li><Link href={'/chakra/04'} className={Style.under}>smaple04</Link></li>
          </ul>
        </Box>
        <Box w={'80%'} margin={'0 auto'} border={'1px solid #000'} padding={'2rem'}>
          <Text as={'p'}>chakra-UI Template</Text>
          <ul>
            <li><Link href={'/first/map'} className={Style.under}>mapについて</Link></li>
            <li><Link href={'/first/filter'} className={Style.under}>filterについて</Link></li>
            <li><Link href={'/first/condition'} className={Style.under}>記号とキーワード</Link></li>
          </ul>
        </Box>
        <Box w={'80%'} margin={'0 auto'} border={'1px solid #000'} padding={'2rem'}>
          <Text as={'p'}>chakra-UI Template</Text>
          <ul>
            <li><Link href={'/properness/01'} className={Style.under}>適当01</Link></li>
            <li><Link href={'/properness/02'} className={Style.under}>適当02</Link></li>
            <li><Link href={'/properness/03'} className={Style.under}>適当03</Link></li>
            <li><Link href={'/properness/04'} className={Style.under}>適当04</Link></li>
            <li><Link href={'/properness/05'} className={Style.under}>適当05</Link></li>
            <li><Link href={'/properness/06'} className={Style.under}>カレンダー</Link></li>
            <li><Link href={'/properness/07'} className={Style.under}>適当6</Link></li>
            <li><Link href={'/properness/08'} className={Style.under}>適当7</Link></li>
            <li><Link href={'/properness/weather'} className={Style.under}>天気予報</Link></li>
          </ul>
        </Box>
      </Box>
    </>
  )
}