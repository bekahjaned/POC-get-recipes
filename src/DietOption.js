import React from 'react'
import Radio from '@mui/material/Radio';

function DietOption({ id, title, dietState, onChange }) {
    return (
        <div>
            <Radio 
                checked={dietState === id}
                onChange={onChange}
                id={id}
                name="diet"
                value={id}
                inputProps={{ 'aria-label': id }}
            /> 
            <label>{title}</label>
        </div>
    )
}

export default DietOption
