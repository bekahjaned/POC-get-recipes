import React, { useState } from 'react'

import emailjs from "emailjs-com"

function Form() {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const messageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let templateParams = {
            name: name,
            email: email,
            message: message
        }

        emailjs.send(
            "Test",
            "portfolio_contact", 
            templateParams,
            "user_uFBt7OJSbpoxTLb0kocyH"
        )

        console.log(`
        ---SUBMITTING---
        Name: ${name}
        Email: ${email}
        Message: ${message}
        `)
    }

    return (
        <form>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" onChange={nameChange} />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email" onChange={emailChange} />
            </div>
            <div>
                <label htmlFor="message">message</label>
                <input type="text" name="message" id="message" onChange={messageChange} />
            </div>
            <input type="submit" id="button" value="Send Email" onSubmit={handleSubmit} />
        </form>
    )
}

export default Form
