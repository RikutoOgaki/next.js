import {useState} from 'react'
import {Box,Text,Flex} from '@chakra-ui/react'
import Link from 'next/link' 
import Style from '@/styles/01/index.module.css'

export default function index(){
  return(
    <>
        <Box>
          <Flex justifyContent={'center'}>
            <Text as={'h1'} fontSize={'4rem'}>My next.js study</Text>
          </Flex>
          <Box w={'80%'} margin={'0 auto'} border={'1px solid #000'} padding={'2rem'}>
              <ul>
                <li><Link href={'/sample/01'} className={Style.under}>smaple01</Link></li>
                <li><Link href={'/sample/02'} className={Style.under}>smaple02</Link></li>
              </ul>
          </Box>
        </Box>
    </>
  )
}