import { useState, useEffect, useRef } from 'react'

export default function Number08() {
    const [state, setState] = useState({
        count: 0
    })

    const handleInterval = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }

    const intervalCallbackRef = useRef(handleInterval)
    useEffect(() => {
        intervalCallbackRef.current = handleInterval
    })

    useEffect(() => {
        const timer = setInterval(() => {
            intervalCallbackRef.current()
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <>
            <div>
                <p>{state.count}</p>
            </div>
        </>
    )
}