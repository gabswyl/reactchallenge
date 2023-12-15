import React from 'react'
import './header.css'

const Header = () => {

    const menuList = [
        "Como fazer",
        "Ofertas",
        "Depoimentos",
        "Videos"
    ]

    return (
        <header className='header_nav'>
            <img src={'./public/logo.svg'} />
            <div>
                <ul>{menuList.map((item) => <li key={item}>{item} /</li>)}
                    <li>Meu carrinho</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
