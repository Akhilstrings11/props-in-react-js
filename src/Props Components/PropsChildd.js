import React from 'react'

function PropsChildd({props}) {
    return (
        <>
        {/* <h1> {buttonText} </h1> */}
            <button> {props.buttonIndex} {props.buttonText} </button>
        </>
    )
}

export default PropsChildd
