import { useState } from 'react'

type State = {
    count: number
}

export default function Number03() {

    const [state, setState] = useState(0)

    // stateの内部状態を保持したまま、その数を２倍したり２割ってみたりする適当な計算機
    // しかし数字が本当に正しいのかわからない可能性があるのでReact+typescriptで計算させるのは良くない

    return (
        <>
            <div>
                <p>{state}</p>
                <input type="button" value="PLUS"
                    onClick={() => setState(state + 1)}
                />
                <input type="button" value="MINUS"
                    onClick={() => setState(state - 1)}
                />
                <input type="button" value="倍にする"
                    onClick={() => setState(state * 2)}
                />
                <input type="button" value="1/2倍にする"
                    onClick={() => setState(state / 2)}
                />
                <input type="button" value="0にする"
                    onClick={() => setState(0)}
                />
            </div>
        </>
    )
}