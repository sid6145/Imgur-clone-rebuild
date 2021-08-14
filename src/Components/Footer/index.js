import React from 'react'
import './style.css'

function Footer() {

   let date = new Date

    return (
        <div className="footer">
            <p>©Copyright Siddhant {date.getFullYear()}</p>
        </div>
    )
}

export default Footer 
