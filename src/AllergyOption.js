import React from 'react'

function AllergyOption({ id, title, onChange, checked }) {
    return (
        <div>
            <input type="checkbox" id={id} name={id} onChange={onChange} checked={checked} />
            <label>{title}</label>
        </div>
    )
}

export default AllergyOption
