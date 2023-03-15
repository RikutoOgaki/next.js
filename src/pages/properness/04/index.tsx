import { useState } from 'react'

export default function Number04() {

    const revesi = document.getElementById('reversi')
    console.log(revesi);


    let tr = document.createElement('tr')
    for (let i = 0; i < 8; i++) {
        let td = document.createElement('td')
        tr.appendChild(td)
        console.log(tr);
    }

    revesi.innerHTML = tr




    return (
        <>
            <div>
                <table id='reversi'>
                </table>
            </div>
        </>
    )
}