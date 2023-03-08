import {useState} from 'react'
import {Box,Text,Input} from '@chakra-ui/react'

type Props = {
    memo:string,
    // 型は文字列だよと指定している
    onRikuto: (v:string) => void
    // 型は関数だよと指定している
    // 関数が呼ばれたときの引数はvで文字列だと定義している
    // voidは関数が呼ばれたときに返す値はなしとしている（アロー関数のあとは戻り値。今回はvoidだからなにもない）
}

type State = {
    memo:string
    // 型は文字列だよと指定している
}

export function SampleComponent(props:Props){
    // コンポーネントの引数propsに型Propsを定義している
    const [state,setState] = useState<State>({
        // stateの型はStateだよと定義している
        memo:props.memo
        // memoの初期値はprops.memoつまり文字列だよとしている
    })

    return(
        <>
            <Box>
                <Text as={'p'}>子の内部状態</Text>
                <Input type='text' value={state.memo}
                    onChange={(e)=> setState({
                        ...state,
                        memo:e.target.value
                    })}
                    onBlur={()=> props.onRikuto(state.memo)}
                    // inputタグのポインターが外れたときにonRikutoが呼ばれて、値にstate.memoの値が渡される（31~33行目の内容）
                />
            </Box>
        </>
    )
}