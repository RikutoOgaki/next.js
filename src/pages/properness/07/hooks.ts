import {useState,useEffect} from 'react'

type State = {
    count:number
}

export function useCustomHook():[State]{

    const [state,setState] = useState({
        count:0
    })

    useEffect(()=> {
        const timer = setInterval(()=> {
            setState((activeState) => {
                return{
                    ...activeState,
                    count:activeState.count + 1
                }
            })
        },1000)

        return () => {
            clearInterval(timer)
        }
    },[])


    return[state]
}