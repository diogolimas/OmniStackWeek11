import React from 'react';
import './styles.css';
import logoImg from '../../assets/img/logo.svg';


import {Link} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';

export default function NewIncident(){
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt=""/> 
                <h1>Cadastra novo caso</h1>
                 <p>
                 Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                 </p>
                     <Link className="back-link" to ="/profile">
                        <FiArrowDownLeft  size={16} color="#e02041"/>
                        Voltar para home
                     </Link>
            </section>
            <form action="">
                <input type="text" name="" id="" placeholder="título do caso"/>
                <textarea type="email" name="" id="" placeholder="descrição"/>
                <input type="" placeholder="valor em reais"/>

                    <button className="button" type="submit"> Cadastrar</button>

            </form>
        </div>
    </div>
    );
}