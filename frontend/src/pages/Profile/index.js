import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash} from 'react-icons/fi';
import './style.css';
import api from '../../services/api';
import logoImg from '../../assets/img/logo.svg'

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    
    
    useEffect(() => {
        api.get('profile', {
            headers : { Authorization: ongId}})
            .then(response => {
                setIncidents(response.data);
                
            })
    }, [ongId]);


    return (
            <div className="profile-container">

        <header>

            <img src={logoImg} alt=""/>
        
                <span>

                    Bem vinda, {ongName}
                </span>


                <Link className="button" to="/incidents/new"> 
                    Cadastrar novo caso
                </Link>

                <button type="submit">

                        <FiPower size={18} color="#e02041"/>

                </button>
        </header>
                <h1>
                    Casos cadastrados
                </h1>
                <ul>
                    {incidents.map (incident => (
                        <li key={incident.id}>
                        <strong>CASO: </strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>
                        
                        <strong>VALOR::</strong>
                            <p>{incident.value}</p>
                                <button >
                                    <FiTrash size={20} color="#a8a8b3" />
                                </button>
                    </li>
                    ))}
                </ul>
            </div>
        );
}

