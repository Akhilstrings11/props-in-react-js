import React from 'react'
import PropsChildd from './PropsChildd'

function PropsParent() {

    const buttonText = ["Increment", "Decrement", "Delete", "Add", "Submit"]

    return (
        <div>
            <h2>Props Parent</h2>
            <div style={{display : "flex", columnGap : "10px"}}>
            {/* <PropsChildd buttonText = "Increment" />
            <PropsChildd buttonText = "Decrement" />
            <PropsChildd buttonText = "Delete" />
            <PropsChildd buttonText = "Add" /> */}
            {buttonText.map((item,index) => <PropsChildd buttonText = {item} buttonIndex = {index + 1} />)}
            </div>
        </div>
    )
}

export default PropsParent
