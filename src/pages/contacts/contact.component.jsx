import React from 'react'
import './contact.styles.scss'

const Contact = () => (
    <div className='contact-page'>
        <h2 className='title'>This e-commerce web page is made by <span className='name'>Ihor Zaiets</span></h2>
        <p className='subtitle'>My contacts:</p>
        <ul className='list'>
            <li className='list-item'>
                <span className="link-description">Phone number:</span>
                <a className="link" href='tel:+380982599612'>+38 098 259 96 12</a>
            </li>
            <li className='list-item'>
                <span className="link-description">Email:</span>
                <a className="link" href='mailto:ihor.zaiets2001@gmail.com'>ihor.zaiets2001@gmail.com</a>                
            </li>
        </ul>
    </div>
)


export default Contact;