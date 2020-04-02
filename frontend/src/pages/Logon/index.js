import React from 'react';
import './style.css';
import heroesImg from '../../assets/img/heroes.png';
import logoImg from '../../assets/img/logo.svg';
export default function Logon(){
    return(
        <div className="logo-container">
            <section className="form">
            <img src="{logoImg}" alt=""/>
            </section>

            <img src={heroesImg} alt="Imagem heroes"/>
        </div>   
    );
}