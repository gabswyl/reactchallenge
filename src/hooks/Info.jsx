import React from 'react'
import "./info.css"
import Newsletter from './Newsletter'

const Info = () => {
    return (
        <div className='info'>
            <div className='info_new'>
                <p>Sua casa com as</p>
                <h1>melhores <br /> plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar <br /> a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. <br /> Entre com seu e-mail e assine nossa newsletter para saber <br /> das novidades da marca.</p>
                <Newsletter name="Insira seu e-mail" assinatura="Assinar newsletter" />
            </div>
                <img className='planta' src="./public/planta.png" />
        </div>
    )
}

export default Info
