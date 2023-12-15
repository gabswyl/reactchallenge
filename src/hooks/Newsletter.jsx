import React from 'react'
import './Newsletter.css'

const Newsletter = ({ name, assinatura }) => {
    return (
        <div className='newsletter'>
            <form>
                <input placeholder={name} />
                <button>{assinatura}</button>
            </form>
        </div>
    )
}

export default Newsletter
