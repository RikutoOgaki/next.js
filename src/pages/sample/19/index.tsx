import { useReducer } from 'react'
import { ActionTypes, reducer } from './reducer'

export default function Sample19() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <>
            <div>
                <h1>sample19 useReducerについて</h1>
                <p>{state.count}</p>

                <button onClick={() => dispatch({ type: ActionTypes.PLUS })}>ADD</button><br />
                <button onClick={() => dispatch({ type: ActionTypes.MINUS })}>MINUS</button><br />
                <button onClick={() => dispatch({ type: ActionTypes.SET, payload: { count: 0 } })}>SET</button>
            </div>
        </>
    )
}
