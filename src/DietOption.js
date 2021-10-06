import React from 'react'

function DietOption({ id, title, dietState, onChange }) {
    return (
        <div>
            <input type="radio" id={id} name="diet" value={id} checked={dietState === id} onChange={onChange} />
            <label>{title}</label>
        </div>
    )
}

export default DietOption
