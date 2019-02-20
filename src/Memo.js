import React  from 'react'

function Memo({seconds}){
    console.log('I am rendering',seconds)
    return <p>I am updating every {seconds} seconds.</p>
}

export default React.memo(Memo)