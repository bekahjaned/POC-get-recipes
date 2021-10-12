import React from 'react'
import Checkbox from '@mui/material/Checkbox';

function AllergyOption({ id, title, onChange, checked }) {
    return (
        <div>
            <Checkbox 
               checked={checked}
               onChange={onChange}
               id={id}
               name={id}
               inputProps={{ 'aria-label': id }}
            />
            <label>{title}</label>
        </div>
    )
}

export default AllergyOption
