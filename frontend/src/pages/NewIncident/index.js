import React, {useState} from 'react';
import './styles.css';
import logoImg from '../../assets/img/logo.svg';
import api from '../../services/api';

import {Link, useHistory} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';

export default function NewIncident(){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [value, setValue] = useState();
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();
    async function hadleNewIncident(e){
        e.preventDefault();
        const data = {
            title, description, value
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId 
                }
            })
            history.push('/profile');
        } catch (error) {
            alert('erro no cadastro de casos, tente novamente');
        }

    }
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
            <form action="" onSubmit={hadleNewIncident}>
                <input type="text" name="" id=""
                     placeholder="título do caso"
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                     />
                <textarea type="email" name="" id=""
                     placeholder="descrição"
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                     />
                <input type=""
                     placeholder="valor em reais"
                     value={value}
                     onChange={e => setValue(e.target.value)}
                     />

                    <button className="button" type="submit"> Cadastrar</button>

            </form>
        </div>
    </div>
    );
}