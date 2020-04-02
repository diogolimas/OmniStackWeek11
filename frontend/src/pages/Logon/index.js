import React, {useState} from 'react';  
import './style.css';

import api from '../../services/api';


import heroesImg from '../../assets/img/heroes.png';
import logoImg from '../../assets/img/logo.svg';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';
export default function Logon(){

    const [id, setId] = useState();
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }  catch (error) {
            alert('error');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Be The Hero"/>
            <form action="" onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input type="text" className=""
                        value={id}
                        onChange={ e => setId(e.target.value) }
                    placeholder="Sua ID" />
                    <button className="button" type="submit">
                        Entrar
                    </button>

                    <Link to="/register" className="back-link">
                       <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro

                    </Link>
            </form>
            </section>

            <img src={heroesImg} alt="Imagem heroes"/>
        </div>   
    );
}