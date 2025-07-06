import React from 'react'

const Input = ({ labelName, type, placeholder, inputValue, setInputValue }) => {
    return (
        <div>
            <label>{labelName}</label>
            <input type={type} placeholder={placeholder} value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} />
        </div>
    )
}

export default Input