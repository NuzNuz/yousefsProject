import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-content'>
                <h1>Contact Us</h1>
                <p>For any questions or concerns, please contact us:</p>
                <form className='contact-form' netlify>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder='Name' required></input>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='Email' required></input>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder='Message'required></textarea>
                    <button className='contact-button' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact